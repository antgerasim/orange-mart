export abstract class CacheService {

  protected getItem<T>(key: string): T {

    const data = localStorage.getItem(key);

    if (data && data !== 'undefined') {
      return JSON.parse(data);

    }
    return null;
  }

  protected setItem(key: string, data: object | string) {
    if (typeof data === 'string') {
      localStorage.setItem(key, data)
    }
    localStorage.setItem(key, JSON.stringify(data))
  }

  protected removeItem(key: string){
    localStorage.removeItem(key)
  }

  protected clear(){
    localStorage.clear();
  }

}

/*
This cache service base class can be used to give caching capabilities to any service. 
It is not the same as creating a centralized cache service that you inject into other 
service. By avoiding a centralized value store, we avoid inter-dependencies between various services.
*/

//Weiter mit Caching with cookie and localStorage 74%
