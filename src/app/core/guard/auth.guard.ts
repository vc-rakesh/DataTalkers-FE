import { inject } from "@angular/core";
import { CanMatchFn, Router } from "@angular/router";
import { STORAGE } from "@constants/app.constant";
import { StorageService } from "@services/storage.service";

export const AuthGuard: CanMatchFn = () => {
  const storageService = inject(StorageService);
  const router = inject(Router);
  const token = storageService.get(STORAGE.TOKEN);
  if (token) {
    return true;
  }
  router.navigate(['/auth/login']);
  return false;
};
