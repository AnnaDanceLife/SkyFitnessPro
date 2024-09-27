# SkyFitnessPro

<img width="379" alt="image" src="https://github.com/ArseniyKhal/SkyFitnessPro/assets/92600602/0abf9775-c3c7-48e6-9203-ad4321dec0d7">

Pазработка сайт для онлайн школы тренировок "SkyFitnessPro"

## Ссылка на приложение: https://skyfitnesspro3g.netlify.app

## В проекте принимали участвие:

- Анна Шатилова (anna-shatilova)
- Арсений Халиуллин (ArseniyKhal)
- Виктория Колосова (noizzer28)
- Юлия Миль (JulieMille)

## Установка

Склонируйте репозиторий и установите зависимости

```sh
npm install
```

Создайте файл .env (пример переменной окружения находится в файле .env.example)

### .env

В .env в переменной **REACT_APP_API_KEY** хранится апи-ключ приложения. Для запуска проекта локально или изменения проекта вы можете создать свой проект и базу данных [Firebase](https://firebase.google.com/). Вам понадобится база данных **Realtime database**. Описание структуры данных смотрите в разделе ("Backend и защита данных"), фикстуры курсов находятся в /src/data/fixtures/course.json.

Данные курсов содержатся ([здесь](https://docs.google.com/document/d/1i982bVLvoD-tI8Uv1hK0D6mS3_-wPspaK8E3fcHVhgI/edit)).

Для запуска в development режиме выполните команду

```sh
npm run start
```

Приложение будет доступно по адресу: [http://localhost:3000](http://localhost:3000)

При необходимости production сборки выполните команду

```sh
npm run build
```

## Описание проекта:

Сайт для онлайн школы тренировок "SkyFitnessPro".
Макет доступен [здесь](https://www.figma.com/file/QoOmLM2WGbES23xQeDCCYi/%D0%A1%D0%B0%D0%B9%D1%82-%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD-%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BE%D0%BA?node-id=0%3A1)

### Технический стек приложения

- [x] JS, React
- [x] Redux + Redux Toolkit + RTK Query
- [x] Firebase
- [x] React Router DOM, реализация routing
- [x] Styled Components
