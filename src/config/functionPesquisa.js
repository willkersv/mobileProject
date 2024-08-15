import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    getDoc,
    doc,
    updateDoc,
    deleteDoc,
    query,
    increment,
  } from 'firebase/firestore';
  import {getStorage, ref, uploadBytes, deleteObject, getDownloadURL} from 'firebase/storage';
  import { app } from './firebase';
  
  const db = getFirestore(app);
  const storage = getStorage(app);
  
  export async function createSurvey(userId, name, date, imageAsset) {
  try {
    // Verificar se já existe uma pesquisa com o mesmo nome
    const existingSurveys = await getSurveys(userId);
    const surveyExists = existingSurveys.some(survey => survey.name === name);

    if (surveyExists) {
      console.log('Uma pesquisa com esse nome já existe.');
      return null; 
    }

    // Abrir o blob da imagem
    const file = await fetch(imageAsset.uri);
    const blob = await file.blob();

    // Armazenar a imagem no Firebase Storage
    const imageRef = ref(
      storage,
      `surveys/${userId}/${name}/${imageAsset.fileName}`,
    );
    
    await uploadBytes(imageRef, blob, {contentType: imageAsset.type});

    const imageUrl = await getDownloadURL(imageRef);

    // Adicionar a pesquisa à subcoleção do usuário no Firestore
    const docRef = await addDoc(collection(db, 'users', userId, 'surveys'), {
      name,
      date,
      imageUrl,
      ratings: {
        pessimo: 0,
        ruim: 0,
        neutro: 0,
        bom: 0,
        excelente: 0,
      },
    });

    console.log('Pesquisa criada com ID:', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Erro ao criar pesquisa:', error);
  }
}

// Função para obter todas as pesquisas de um usuário
export async function getSurveys(userId) {
  const surveys = [];
  try {
    const querySnapshot = await getDocs(
      collection(db, 'users', userId, 'surveys'),
    );

    querySnapshot.forEach(doc => {
      console.log(doc.data());
      surveys.push({id: doc.id, ...doc.data()});
    });

    return surveys;
  } catch (error) {
    console.error('Erro ao obter pesquisas:', error);
    return surveys;
  }
}
  
  // Função para atualizar uma pesquisa
  export async function updateSurvey(userId, surveyId, name, date, newImage) {
    try {
      const surveyRef = doc(db, 'users', userId, 'surveys', surveyId);
  
      const surveyDoc = await getDoc(surveyRef);
      const openFile = await fetch(newImage.uri);
      
      const blob = await openFile.blob();
      console.log(openFile)
      const currentData = surveyDoc.data();
      let imageUrl = currentData.imageUrl;
  
      // Armazenar a nova imagem no Firebase Storage
  
      if (newImage) {
        // Excluindo a imagem antiga, se existir
        if (imageUrl) {
          const oldImageRef = ref(storage, imageUrl);
          await deleteObject(oldImageRef);
        }
  
        // Armazenar a nova imagem no Firebase Storage
        const newImageRef = ref(
          storage,
          `surveys/${userId}/${name}/${newImage.name}`,
        );
        await uploadBytes(newImageRef, blob);
        imageUrl = await getDownloadURL(newImageRef);
      }
  
      // Atualizar a pesquisa no Firestore
      await updateDoc(surveyRef, {
        name: name,
        date: date,
        imageUrl: imageUrl,
      });

      console.log(name)
  
      console.log('Pesquisa atualizada com ID:', surveyId);
    } catch (error) {
      console.error('Erro ao atualizar pesquisa:', error);
    }
  }
  
  // Função para deletar uma pesquisa
  export async function deleteSurvey(userId, surveyId) {
    try {
      const surveyRef = doc(db, 'users', userId, 'surveys', surveyId);
  
      // Excluir o documento da pesquisa
      await deleteDoc(surveyRef);
  
      console.log('Pesquisa deletada com ID:', surveyId);
    } catch (error) {
      console.error('Erro ao deletar pesquisa:', error);
    }
  }
  
  export async function addRating(userId, surveyId, ratingType) {
    try {
      const validRatings = ['pessimo', 'ruim', 'neutro', 'bom', 'excelente'];
      if (!validRatings.includes(ratingType)) {
        throw new Error('Tipo de nota inválido');
      }
  
      const surveyRef = doc(db, 'users', userId, 'surveys', surveyId);
      await updateDoc(surveyRef, {
        [`ratings.${ratingType}`]: increment(1),
      });
  
      console.log('dados pesquisa', surveyId);
      console.log(
        `Nota ${ratingType} dada a pesquisa com ID: ${surveyId}`,
      );
    } catch (error) {
      console.error('Erro ao atualizar nota:', error);
    }
  }