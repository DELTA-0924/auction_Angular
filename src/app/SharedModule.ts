import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // Импортируем HttpClientModule


@NgModule({
  declarations: [
    // Ваши общие компоненты, если есть
  ],
  imports: [
    CommonModule,
     // Добавляем HttpClientModule
    // Другие модули, которые вы хотите импортировать в SharedModule
  ],
  exports: [
    CommonModule,
    // Мы также можем экспортировать HttpClientModule, чтобы он был доступен в других модулях, которые импортируют SharedModule
    HttpClientModule,
    // Если вы хотите экспортировать ваши общие компоненты, добавьте их сюда
  ],
  
})
export class SharedModule { }
