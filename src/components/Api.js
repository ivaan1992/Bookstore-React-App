export default class booksApi {
    static BASE = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
    static  ID = '5x2dLiwXMRMnxxysKsC2';

    static getBooksFromApi = async () => {
        const url = `${this.BASE}/apps/${this.ID}/books`;
        const response = await fetch(url);
        const json = await response.json();
        return json;
    };
    
    static addBooksToApi = async(data) => { 
      const url = `${this.BASE_URL}/apps/${this.ID}/books`;
      const response = await fetch(url , {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
      });
      return response;
    };
    
    static deleteBooksFromApi = async(id) => {
      const url = `${this.BASE_URL}/apps/${this.ID}/books`;
      const response = await fetch(url , {
        method: 'DELETE',
      });
      return response;
    };
}



