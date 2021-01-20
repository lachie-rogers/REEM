// return car action 

export const returnCar = (returnCar) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore();
    firestore
      .collection("Returns")
      .doc(returnCar.bookingsid)
      .set({
        Car: returnCar.Car,
        Date: returnCar.Date,
        User: returnCar.User,
        notes: returnCar.notes,
        odometer: returnCar.odometer,
      })
      .then(() => {
        dispatch({type: "RETURN_SUCCESS"});
      })
      .catch((err) => {
        dispatch({type: "RETURN_ERROR", err});
      });
  };
};


// upload file google cloud way not firebase, note extra .json needed from auth.
export const uploadPhoto = (photo) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
   
    const {Storage} = require('@google-cloud/storage');

    // Creates a client
    const storage = new Storage({    projectId: 'old-mates-club',
    keyFilename: 'old-mates-club-firebase-adminsdk-j02y9-494d580fd6.json'});
    
    async function uploadFile() {
      // Uploads a local file to the bucket
      await storage.bucket("old-mates-club.appspot.com").upload(photo, {
        // Support for HTTP requests made with `Accept-Encoding: gzip`
        gzip: true,
        // By setting the option `destination`, you can change the name of the
        // object you are uploading to a bucket.
        metadata: {
          // Enable long-lived HTTP caching headers
          // Use only if the contents of the file will never change
          // (If the contents will change, use cacheControl: 'no-cache')
          cacheControl: 'public, max-age=31536000',
        },
      });
    

    }
    
    uploadFile().catch(console.error);



  };

  
};
