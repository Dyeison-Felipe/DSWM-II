import { useState, useEffect } from "react";
import { db, auth } from "./firebaseConnect";
import {
  doc,
  setDoc,
  collection,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  onSnapshot,
  collectionGroup,
} from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

export default function App() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [postId, setPostId] = useState("");
  const [posts, setPosts] = useState([]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(false);
  const [detailsUser, setDetailsUser] = useState({});

  useEffect(() => {
    const loadPost = async () => {
      const data = onSnapshot(collection(db, "posts"), (snapshot) => {
        let postList = [];
        snapshot.forEach((doc) => {
          postList.push({
            id: doc.id,
            title: doc.data().title,
            author: doc.data().author,
          });
        });
        setPosts(postList);
      });
    };

    loadPost();
  }, []);

  useEffect(() => {
    async function verifyLogin() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(true);
          setDetailsUser({
            uid: user.uid,
            email: user.email,
          });
        } else {
          setUser(false);
          setDetailsUser({});
        }
      });
    }

    verifyLogin();
  }, []);

  async function NewUser() {
    await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setEmail("");
        setPassword("");
        alert("Usuário cadastrado com sucesso");
      })
      .catch((error) => {
        if (error.code === 'auth/weak-password') {
          alert("Senha muito fraca");
        } else if (error.code === 'auth/email-already-in-use'){
          alert("este email já existe!!!");
        };
      });
  }

  async function loginUser() {
    await signInWithEmailAndPassword(auth, email, password)
      .then((value) => {
        alert("Usuário logado com sucesso");

        setUser(true);
        setDetailsUser({
          uid: value.user.uid,
          email: value.user.email
        })

        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        alert(`ocorreu algum error ${error}`);
      });
  }

  async function signOutUser() {
    await signOut(auth)
    setUser(false);
    setDetailsUser({});
  };

  //c - create

  const addPost = async () => {
    await addDoc(collection(db, "post"), {
      title: title,
      author: author,
    })
      .then(() => {
        alert("Cadastro realizado com sucesso!!");
        setAuthor("");
        setTitle("");
      })
      .catch((error) => {
        console.log("Algo deu errado", error);
      });
  };

  // R read
  const getPost = async () => {
    const config = collection(db, "post");
    await getDocs(config)
      .then((snapshot) => {
        let list = [];
        snapshot.forEach((doc) => {
          list.push({
            id: doc.id,
            title: doc.data().title,
            author: doc.data().author,
          });
        });
        setPosts(list);
      })
      .catch((error) => {
        console.log("Algo deu errado", error);
      });
  };

  // U - update
  const updatePost = async () => {
    const updatedPost = doc(db, "post", postId);
    await updateDoc(updatedPost, {
      title: title,
      author: author,
    })
      .then(() => {
        alert("post Editado com sucesso");
        setPostId("");
        setTitle("");
        setAuthor("");
      })
      .catch((error) => {
        console.log("Algo deu errado", error);
      });
  };

  //D - delete
  const deletePost = async (id) => {
    const deletedPost = doc(db, "post", id);
    await deleteDoc(deletedPost)
      .then(() => {
        alert("Post deletado com sucesso");
      })
      .catch((error) => {
        console.log("Algo deu errado", error);
      });
  };

  return (
    <>
      <div>
        <h1>ReactJS + Firebase</h1>

        {user && (
          <div>
            <strong>Seja bem vindo(a)</strong>
            <br/>
            <span>ID: {detailsUser.uid}</span>
            <br/>
            <span>email: {detailsUser.email}</span>

            <button onClick={signOutUser}>Sair</button>
          </div>
        )}

        <h2>Usuários</h2>

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />

        <label>Senha:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
        />

        <button onClick={NewUser}>Cadastrar</button>
        <button onClick={loginUser}>Login</button>
        
        <hr></hr>



        <h2>POSTS</h2>

        <label>ID do Post</label>
        <input
          type="text"
          placeholder="ID do Post"
          value={postId}
          onChange={(e) => setPostId(e.target.value)}
        />

        <label>Titulo:</label>
        <textarea
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Autor:</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Autor do post"
        />

        <button onClick={addPost}>Inserir</button>
        <button onClick={getPost}>Buscar</button>
        <button onClick={updatePost}>Editar</button>

        <ul>
          {posts?.map((value) => (
            <li key={value.id}>
              ID:{value.id}
              <span>Titulo: {value.title}</span>
              <span>Autor: {value.author}</span>
              <button onClick={() => deletePost(value.id)}>Deletar</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
