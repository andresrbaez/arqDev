import{r,u as d,a as e,j as s,g as p,N as m,b as u}from"./index-82472d0c.js";const h=()=>{const[o,t]=r.useState([]),[j,i]=r.useState([]),c=d();r.useEffect(()=>{async function a(){const l=await p();t(l.data)}a()},[]);const n=a=>{i(a),c(`/projects/${a.id}`)};return e("div",{className:"gallery-grill",children:o.map(a=>e("div",{onClick:()=>n(a),className:"gallery-box",children:s("div",{className:"cursor-pointer gallery-box_int",children:[e("img",{src:a.media,className:"w-full project_img"}),e("div",{className:"cap",children:e("h1",{className:"titleHover",children:a.title})})]})},a.id))})},g=()=>s("div",{className:"App",children:[e(m,{}),s("div",{className:"header w-full",children:[e("div",{className:"w-[35%]",children:e("h1",{children:"Juan Fernando Barona Morales"})}),s("div",{className:"text-justify w-[65%] px-12",children:[e("h2",{className:"title_h2",children:"Diseño Industrial y Arquitectura"}),e("p",{children:"Diseño de interiores y exteriores. Paisajismo para contextos inmediatos de proyectos rurales y urbanos. Fotorealismo para proyectos arquitectonicos y de diseño industrial. Encargado de modelado 3D para proyectos arquitectonicos con niveles de LOD en tecnología BIM con Revit."}),e("p",{className:"mt-4",children:"Manejo de herramientas digitales tanto para diseño 3D, 2D, multimedia y CGL. Certificado por Autodesk en BIM para Revit. Manejo de 3Ds Max con Corona Render. Manejo de Photoshop e Ilustrator para diseño gráfico y postproducción de imagenes fotorealistas. Manejo de After Effects y Premiere para edición y producción de video."}),e("p",{className:"mt-4",children:"2 años de experiencia laboral en Dvoxel Render Studio. 6 meses de experiencia como residente de obra para Inversiones Echeverria. Arquitecto Junior para Mallol Arquitectos"})]})]}),e(h,{}),e(u,{})]});export{g as default};