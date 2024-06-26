export const helphttp = () => {
    const customFetch = (endPoint, options) => {
      const defaultHeader = {
        accept: "application/json",
      };
      const controller = new AbortController();
      options.signal = controller.signal;
  
      options.method = options.method || "GET";
      options.headers = options.headers
        ? { ...defaultHeader, ...options.headers }
        : defaultHeader;
        options.credentials = 'include';
      options.body = JSON.stringify(options.body) || false;
      if (!options.body) {
        delete options.body;
      }
      setTimeout(() => controller.abort(), 3000);
  
      return fetch(endPoint, options)
        .then((data) =>
          data.ok
            ? data.json()
            : Promise.reject({
                "err": true,
                "status": data.status || "00",
                "statusText": data.statusText || "Ocurrio un error",
              })
        ).catch((err) => err);
    };
  
    const get = (url, options={}) => {
      return customFetch(url, options);
    };
  
    const post = (url, options) => {
      options.method = "POST";
      return customFetch(url, options);
    };
  
    const put = (url, options) => {
      options.method = "PUT";
      return customFetch(url, options);
    };
  
    const del = (url, options) => {
      options.method = "DELETE";
      return customFetch(url, options);
    };
  
    return {
      get,
      post,
      put,
      del,
    };
  };