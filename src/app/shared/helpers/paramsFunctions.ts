import { HttpParams } from '@angular/common/http';

const createHttpParams = (params: {[key: string]: string | number}): HttpParams => {
  let httpParams: HttpParams = new HttpParams();
  Object.keys(params)
    .forEach(param => {
      if (params[param] || params[param] === 0) httpParams = httpParams.set(param, params[param].toString());
    });

  return httpParams;
};

export {
  createHttpParams
};