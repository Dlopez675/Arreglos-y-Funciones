const propiedades_ventas = [
  {
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: '4' ,
    baños: '4',
    costo: '5000',
    smoke: true,
    pets: false, 
  },
  {
    nombre: 'Apartamento acogedor en la montaña',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: '2' ,
    baños: '1' ,
    costo: '1200',
    smoke: true,
    pets: false, 
  },
  {
    nombre: 'Penthouse de lujo con terraza panorámica',
    src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: '3' ,
    baños: '3' ,
    costo: '4500',
    smoke: false,
    pets: true 
  },
  {
    nombre: 'Acogedora casa doble piso',
    src: './assets/img/img4.png',
    descripcion: 'Casa en conjunto residencial familiar doble piso',
    ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: '4' ,
    baños: '3' ,
    costo: '5500',
    smoke: true,
    pets: true 
  },
]

const propiedades_alquiler = [
  {
    nombre: 'Apartamento en el centro de la ciudad',
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
    descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: '2' ,
    baños: '2',
    costo: '2000',
    smoke: false,
    pets: true, 
  },
  {
    nombre: 'Apartamento luminoso con vista al mar',
    src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
    ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
    habitaciones: '3' ,
    baños: '3' ,
    costo: '2.500',
    smoke: true,
    pets: true 
  },
  {
    nombre: 'Condominio moderno en zona residencia',
    src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: '2' ,
    baños: '2' ,
    costo: '2.200',
    smoke: false,
    pets: false, 
  },
  {
    nombre: 'Lujosa propiedad privada',
    src: './assets/img/image5.png',
    descripcion: 'Grandiosa ubicacion en conjunto residencial privado',
    ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: '4' ,
    baños: '3' ,
    costo: '5.500',
    smoke: false,
    pets: true 
},
]

const section1 = document.querySelector("#ap_venta")
const section2 = document.querySelector("#ap_alquiler")

let htmlVentas = "";
let htmlAlquiler = "";
let htmlGeneral = "";


for(let en_venta of propiedades_ventas){

  let permitirFumar = en_venta.smoke ? `<i class="fas fa-smoking"></i> Permitido fumar` : `<i class="fas fa-smoking-ban"></i>No se permite fumar`;
  let permitirMascotas = en_venta.pets ? `<i class="fas fa-paw"></i> Mascotas permitidas` : `<i class="fa-solid fa-ban"></i> No se permiten mascotas`;
  let colorFumar = en_venta.smoke ? "text-success" : "text-danger";
  let colorMascotas = en_venta.pets ? "text-success" : "text-danger";

  htmlVentas += `
    <div class="col-md-4 mb-4">
      <div class="card">
        <img
          src="${en_venta.src}"
          class="card-img-top"
          alt="Imagen del departamento"
        />
        <div class="card-body">
          <h5 class="card-title">
            ${en_venta.nombre}
          </h5>
          <p class="card-text">
            ${en_venta.descripcion}
          </p>
          <p>
            <i class="fas fa-map-marker-alt"></i>
            ${en_venta.ubicacion}
          </p>
          <p>
            <i class="fas fa-bed"></i> ${en_venta.habitaciones} Habitaciones |
            <i class="fas fa-bath"></i> ${en_venta.baños} Baños
          </p>
          <p><i class="fas fa-dollar-sign"></i>${en_venta.costo}</p>
          <p class="${colorFumar}">
            ${permitirFumar}
          </p>
          <p class="${colorMascotas}">
            ${permitirMascotas}
          </p>
        </div>
      </div>
    </div>
  `;

}

for(let en_alquiler of propiedades_alquiler){

  let permitirFumar = en_alquiler.smoke ? `<i class="fas fa-smoking"></i> Permitido fumar` : `<i class="fas fa-smoking-ban"></i>No se permite fumar`;
  let permitirMascotas = en_alquiler.pets ? `<i class="fas fa-paw"></i> Mascotas permitidas` : `<i class="fa-solid fa-ban"></i> No se permiten mascotas`;
  let colorFumar = en_alquiler.smoke ? "text-success" : "text-danger";
  let colorMascotas = en_alquiler.pets ? "text-success" : "text-danger";

  htmlAlquiler += `
    <div class="col-md-4 mb-4">
      <div class="card">
        <img
          src="${en_alquiler.src}"
          class="card-img-top"
          alt="Imagen del departamento"
        />
        <div class="card-body">
          <h5 class="card-title">
            ${en_alquiler.nombre}
          </h5>
          <p class="card-text">
            ${en_alquiler.descripcion}
          </p>
          <p>
            <i class="fas fa-map-marker-alt"></i>
            ${en_alquiler.ubicacion}
          </p>
          <p>
            <i class="fas fa-bed"></i> ${en_alquiler.habitaciones} Habitaciones |
            <i class="fas fa-bath"></i> ${en_alquiler.baños} Baños
          </p>
          <p><i class="fas fa-dollar-sign"></i>${en_alquiler.costo}</p>
          <p class="${colorFumar}">
            ${permitirFumar}
          </p>
          <p class="${colorMascotas}">
            ${permitirMascotas}
          </p>
        </div>
      </div>
    </div>
  `;

}

if(section1){
  section1.innerHTML = htmlVentas;
}

if(section2){
  section2.innerHTML = htmlAlquiler;
}

if(section1, section2){
  const propiedades_ventas = [
    {
      nombre: 'Apartamento de lujo en zona exclusiva',
      src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
      descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
      ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
      habitaciones: '4' ,
      baños: '4',
      costo: '5000',
      smoke: true,
      pets: false, 
    },
    {
      nombre: 'Apartamento acogedor en la montaña',
      src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
      descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
      ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
      habitaciones: '2' ,
      baños: '1' ,
      costo: '1200',
      smoke: true,
      pets: false, 
    },
    {
      nombre: 'Penthouse de lujo con terraza panorámica',
      src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
      descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
      ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
      habitaciones: '3' ,
      baños: '3' ,
      costo: '4500',
      smoke: false,
      pets: true 
    },
    {
      nombre: 'Acogedora casa doble piso',
      src: './assets/img/img4.png',
      descripcion: 'Casa en conjunto residencial familiar doble piso',
      ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
      habitaciones: '4' ,
      baños: '3' ,
      costo: '5500',
      smoke: true,
      pets: true 
    },
  ]
  
  const propiedades_alquiler = [
    {
      nombre: 'Apartamento en el centro de la ciudad',
      src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
      descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
      ubicacion: '123 Main Street, Anytown, CA 91234',
      habitaciones: '2' ,
      baños: '2',
      costo: '2000',
      smoke: false,
      pets: true, 
    },
    {
      nombre: 'Apartamento luminoso con vista al mar',
      src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
      ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
      habitaciones: '3' ,
      baños: '3' ,
      costo: '2.500',
      smoke: true,
      pets: true 
    },
    {
      nombre: 'Condominio moderno en zona residencia',
      src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
      descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
      ubicacion: '123 Main Street, Anytown, CA 91234',
      habitaciones: '2' ,
      baños: '2' ,
      costo: '2.200',
      smoke: false,
      pets: false, 
    },
    {
      nombre: 'Lujosa propiedad privada',
      src: './assets/img/image5.png',
      descripcion: 'Grandiosa ubicacion en conjunto residencial privado',
      ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
      habitaciones: '4' ,
      baños: '3' ,
      costo: '5.500',
      smoke: false,
      pets: true 
  },
  ]
  
  const section1 = document.querySelector("#ap_venta")
  const section2 = document.querySelector("#ap_alquiler")
  
  let htmlVentas = "";
  let htmlAlquiler = "";
  let countVentas = 0;
  let countAlquiler = 0;
  
  for(let en_venta of propiedades_ventas){
    if (countVentas >=3) {
      break;
    } 
    let permitirFumar = en_venta.smoke ? `<i class="fas fa-smoking"></i> Permitido fumar` : `<i class="fas fa-smoking-ban"></i>No se permite fumar`;
    let permitirMascotas = en_venta.pets ? `<i class="fas fa-paw"></i> Mascotas permitidas` : `<i class="fa-solid fa-ban"></i> No se permiten mascotas`;
    let colorFumar = en_venta.smoke ? "text-success" : "text-danger";
    let colorMascotas = en_venta.pets ? "text-success" : "text-danger";
  
    htmlVentas += `
      <div class="col-md-4 mb-4">
        <div class="card">
          <img
            src="${en_venta.src}"
            class="card-img-top"
            alt="Imagen del departamento"
          />
          <div class="card-body">
            <h5 class="card-title">
              ${en_venta.nombre}
            </h5>
            <p class="card-text">
              ${en_venta.descripcion}
            </p>
            <p>
              <i class="fas fa-map-marker-alt"></i>
              ${en_venta.ubicacion}
            </p>
            <p>
              <i class="fas fa-bed"></i> ${en_venta.habitaciones} Habitaciones |
              <i class="fas fa-bath"></i> ${en_venta.baños} Baños
            </p>
            <p><i class="fas fa-dollar-sign"></i>${en_venta.costo}</p>
            <p class="${colorFumar}">
              ${permitirFumar}
            </p>
            <p class="${colorMascotas}">
              ${permitirMascotas}
            </p>
          </div>
        </div>
      </div>
    `;
    countVentas++;
  }
  
  for(let en_alquiler of propiedades_alquiler){
    if (countAlquiler >=3) {
      break;
    } 
    let permitirFumar = en_alquiler.smoke ? `<i class="fas fa-smoking"></i> Permitido fumar` : `<i class="fas fa-smoking-ban"></i>No se permite fumar`;
    let permitirMascotas = en_alquiler.pets ? `<i class="fas fa-paw"></i> Mascotas permitidas` : `<i class="fa-solid fa-ban"></i> No se permiten mascotas`;
    let colorFumar = en_alquiler.smoke ? "text-success" : "text-danger";
    let colorMascotas = en_alquiler.pets ? "text-success" : "text-danger";
  
    htmlAlquiler += `
      <div class="col-md-4 mb-4">
        <div class="card">
          <img
            src="${en_alquiler.src}"
            class="card-img-top"
            alt="Imagen del departamento"
          />
          <div class="card-body">
            <h5 class="card-title">
              ${en_alquiler.nombre}
            </h5>
            <p class="card-text">
              ${en_alquiler.descripcion}
            </p>
            <p>
              <i class="fas fa-map-marker-alt"></i>
              ${en_alquiler.ubicacion}
            </p>
            <p>
              <i class="fas fa-bed"></i> ${en_alquiler.habitaciones} Habitaciones |
              <i class="fas fa-bath"></i> ${en_alquiler.baños} Baños
            </p>
            <p><i class="fas fa-dollar-sign"></i>${en_alquiler.costo}</p>
            <p class="${colorFumar}">
              ${permitirFumar}
            </p>
            <p class="${colorMascotas}">
              ${permitirMascotas}
            </p>
          </div>
        </div>
      </div>
    `;
    countAlquiler++;
  }

  section1.innerHTML = htmlVentas
  section2.innerHTML = htmlAlquiler
}
