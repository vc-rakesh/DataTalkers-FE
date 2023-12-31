import { HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { STORAGE } from "@constants/app.constant";
import { environment } from "@environment/environment";
import { StorageService } from "@services/storage.service";

export const HttpTokenInterceptor: HttpInterceptorFn = (request, next) => {
  const storageService = inject(StorageService);
  const token = storageService.get(STORAGE.TOKEN);
  const requestUrl = `${environment.SERVER_URL}${request.url}`;
  request = request.clone({
    url: requestUrl
  })
  if (token) {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      }
    });
  }
  return next(request);
};
