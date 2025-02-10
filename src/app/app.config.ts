import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"danotes-2dea5","appId":"1:373310245681:web:6c7715a2fdc6a00bf63e10","storageBucket":"danotes-2dea5.firebasestorage.app","apiKey":"AIzaSyB5AuFKR6Sn_3bw_W41KF97a95PA-iifMc","authDomain":"danotes-2dea5.firebaseapp.com","messagingSenderId":"373310245681","measurementId":"G-FX48FS033M"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
