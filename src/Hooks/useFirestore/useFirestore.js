import { useState, useEffect, useCallback } from "react";
import { database } from "../../config/firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
export function useFirestore(reference) {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState([]);
  const collectionReference = collection(database, "transactions");
  const getCollections = useCallback(() => {
    const getData = async () => {
      await getDocs(collectionReference)
        .then((snapshot) => {
          setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        })
        .catch((error) => setMessage(error.message));
    };
    getData();
  }, [collectionReference]);
  useEffect(() => {
    getCollections();
  }, [getCollections]);
  const addCollection = async () => {
    // DO SOME MAGIC
  };
  return { data, message, addCollection };
}
