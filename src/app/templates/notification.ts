export const htmlData = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&family=Tajawal:wght@200;300;400;500;700;800;900&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Tajawal:wght@200;300;400;500;700;800;900&display=swap" rel="stylesheet">
    <title>Email</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Open Sans", sans-serif;
        }

        body {
            font-family: "Open Sans", sans-serif;
            line-height: 1.6;
            background-color: #f9fafb;
            padding: 20px;
            color: #333;
        }

        .container {
            max-width: 100%;
            margin: auto;
            background-color: #f3f3f3;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            overflow: hidden;
        }

        /* Header styling */
        .title-container {
            background-color: #414042;
            padding: 20px;
            text-align: center;
            font-family: "Open Sans", sans-serif;
            border-radius: 4px;
        }

        .title-container h1 {
            color: #ffffff;
            font-size: 20px;
            margin: 0;
            font-weight: 600;
        }

        /* Styling for content */
        ul {
            list-style: none;
            padding: 0;
            margin-top: 20px;
        }

        .info-item {
            padding: 12px 0;
            border-bottom: 1px solid #e0e0e0;
            font-size: 16px;
            text-align: left;
        }

        .info-item strong {
            color: #414042;
             padding-bottom: 8px;
        }

        /* Special styling for the "محتوى الرسالة" section */
        .content {
            padding: 10px 0;
            font-size: 16px;
        }

        .content-title {
            font-weight: bold;
            color: #414042;
             padding-bottom: 8px;
        }

        .content-text {
            display: block;
            border-radius: 6px;
            font-size: 16px;
            color: #333;
            text-align: left;
        }

        /* Responsive styles */
          @media (max-width: 768px) {
            .container {
                padding: 20px;
            }
            .title-container h1 {
            color: #ffffff;
            font-size: 18px;
            margin: 0;
            font-weight: 600;
        }
        }

    </style>
</head>
<body>
    <div class="container">
        <div class="title-container">
            <h1 style="color: #fff">Portal de Sugerencias y Consultas</h1>   
            </div>
        <ul>
          <li class="info-item">
            <strong style="display: flex; align-content: center; gap: 0.25rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="19" height="19" color="#db2777" fill="none">
    <path d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z" stroke="currentColor" stroke-width="1.5" />
</svg>
Categoría:</strong> 
                <span>{{ userType }}</span>
            </li>
          <li class="info-item">
            <strong  style="display: flex; align-content: center; gap: 0.25rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="19" height="19" color="#db2777" fill="none">
    <path d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z" stroke="currentColor" stroke-width="1.5" />
</svg>
Nombre completo:</strong> <span class="ltr"> {{ fullName }} </span></li>
  <li class="info-item">
            <strong style="display: flex; align-content: center; gap: 0.25rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="19" height="19" color="#db2777" fill="none">
    <path d="M4.74038 14.3685L6.69351 12.9816C7.24445 12.5904 7.80305 12.3282 8.44034 12.1585C9.17201 11.9636 9.5 11.5644 9.5 10.711C9.5 8.54628 14.5 8.31594 14.5 10.711C14.5 11.5644 14.828 11.9636 15.5597 12.1585C16.202 12.3295 16.7599 12.5934 17.3065 12.9816L19.2596 14.3685C20.1434 14.9961 20.5547 15.2995 20.7842 15.7819C21 16.2358 21 16.768 21 17.8324C21 19.7461 21 20.703 20.4642 21.3164C19.8152 22.0593 18.128 21.9955 17.0917 21.9955H6.90833C5.87197 21.9955 4.21909 22.0986 3.5358 21.3164C3 20.703 3 19.7461 3 17.8324C3 16.768 3 16.2358 3.21584 15.7819C3.44526 15.2995 3.85662 14.9961 4.74038 14.3685Z" stroke="currentColor" stroke-width="1.5" />
    <path d="M14 17C14 18.1046 13.1046 19 12 19C10.8954 19 10 18.1046 10 17C10 15.8954 10.8954 15 12 15C13.1046 15 14 15.8954 14 17Z" stroke="currentColor" stroke-width="1.5" />
    <path d="M6.96014 3.69772C5.6417 4.07415 4.69384 4.54112 3.82645 5.10455C2.45318 5.9966 1.86443 7.60404 2.02607 9.15513C2.09439 9.81068 2.62064 10.1241 3.23089 9.95455C3.69451 9.82571 4.15888 9.7003 4.61961 9.56364C5.96706 9.16397 6.28399 8.67812 6.47124 7.29885L6.96014 3.69772ZM6.96014 3.69772C10.2186 2.76743 13.7814 2.76743 17.0399 3.69772M17.0399 3.69772C18.3583 4.07415 19.3062 4.54112 20.1735 5.10455C21.5468 5.9966 22.1356 7.60404 21.9739 9.15513C21.9056 9.81068 21.3794 10.1241 20.7691 9.95455C20.3055 9.82571 19.8411 9.7003 19.3804 9.56364C18.0329 9.16397 17.716 8.67812 17.5288 7.29885L17.0399 3.69772Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
</svg>
Número de teléfono:
</strong>
            <span class="ltr"> {{ phoneNumber }} </span>
</li>
       <li class="info-item">
            <strong style="display: flex; align-content: center; gap: 0.25rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="19" height="19" color="#db2777" fill="none">
    <path d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
    <path d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
</svg>
Correo electrónico:
</strong>
            <span class="ltr"> {{ email }} </span>
</li>
  <li class="info-item">
            <strong style="display: flex; align-content: center; gap: 0.25rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="19" height="19" color="#db2777" fill="none">
    <path d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
    <path d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
</svg>
Sucursal:
</strong>
            <span class="ltr"> {{ branch }} </span>
</li>
          <li class="info-item">
            <strong  style="display: flex; align-content: center; gap: 0.25rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="19" height="19" color="#db2777" fill="none">
    <path d="M8.5 14.5H15.5M8.5 9.5H12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M14.1706 20.8905C18.3536 20.6125 21.6856 17.2332 21.9598 12.9909C22.0134 12.1607 22.0134 11.3009 21.9598 10.4707C21.6856 6.22838 18.3536 2.84913 14.1706 2.57107C12.7435 2.47621 11.2536 2.47641 9.8294 2.57107C5.64639 2.84913 2.31441 6.22838 2.04024 10.4707C1.98659 11.3009 1.98659 12.1607 2.04024 12.9909C2.1401 14.536 2.82343 15.9666 3.62791 17.1746C4.09501 18.0203 3.78674 19.0758 3.30021 19.9978C2.94941 20.6626 2.77401 20.995 2.91484 21.2351C3.05568 21.4752 3.37026 21.4829 3.99943 21.4982C5.24367 21.5285 6.08268 21.1757 6.74868 20.6846C7.1264 20.4061 7.31527 20.2668 7.44544 20.2508C7.5756 20.2348 7.83177 20.3403 8.34401 20.5513C8.8044 20.7409 9.33896 20.8579 9.8294 20.8905C11.2536 20.9852 12.7435 20.9854 14.1706 20.8905Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
</svg>
Tipo de mensaje:</strong> {{ contentType }} </li>
            <li class="info-item content">
                <div class="content-title"  style="display: flex; align-content: center; gap: 0.25rem">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="19" height="19" color="#db2777" fill="none">
    <path d="M8.5 14.5H15.5M8.5 9.5H12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M14.1706 20.8905C18.3536 20.6125 21.6856 17.2332 21.9598 12.9909C22.0134 12.1607 22.0134 11.3009 21.9598 10.4707C21.6856 6.22838 18.3536 2.84913 14.1706 2.57107C12.7435 2.47621 11.2536 2.47641 9.8294 2.57107C5.64639 2.84913 2.31441 6.22838 2.04024 10.4707C1.98659 11.3009 1.98659 12.1607 2.04024 12.9909C2.1401 14.536 2.82343 15.9666 3.62791 17.1746C4.09501 18.0203 3.78674 19.0758 3.30021 19.9978C2.94941 20.6626 2.77401 20.995 2.91484 21.2351C3.05568 21.4752 3.37026 21.4829 3.99943 21.4982C5.24367 21.5285 6.08268 21.1757 6.74868 20.6846C7.1264 20.4061 7.31527 20.2668 7.44544 20.2508C7.5756 20.2348 7.83177 20.3403 8.34401 20.5513C8.8044 20.7409 9.33896 20.8579 9.8294 20.8905C11.2536 20.9852 12.7435 20.9854 14.1706 20.8905Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
</svg> Contenido del mensaje:
        </div>
                <span class="content-text">{{ content }}</span>
            </li>
        </ul>
    </div>
</body>
</html>
`;
