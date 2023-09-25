import{r as f,n as h,j as t,F as x,a as e,N as g,b as N}from"./index-3ed353e3.js";const j=(m,d)=>{const[o,a]=f.useState(m),[p,r]=f.useState(!1),[u,n]=f.useState({});return{form:o,errors:u,loading:p,handleChange:i=>{const{name:c,value:l}=i.target;a({...o,[c]:l})},handleSubmit:i=>{i.preventDefault();const c=d(o);n(c),Object.keys(c).length===0&&(r(!0),h.loading("Aguarde un momento por favor...",{position:"bottom-center",duration:2e3,style:{background:"#101010",padding:"20px",color:"#fff"}}),fetch("https://formsubmit.co/ajax/andres-too@hotmail.com",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(o)}).then(l=>l.json()).then(l=>{console.log(l),l.success==="true"&&a(m),r(!1),h.success("Correo enviado",{position:"bottom-center",style:{background:"#101010",padding:"20px",color:"#fff"}})}).catch(l=>{console.log(l),r(!1),h.error("Se produjo un error, intenta de nuevo",{position:"bottom-center",style:{background:"#101010",padding:"20px",color:"#fff"}})}))}}},y=()=>{const m={name:"",email:"",subject:"",msg:""},d=n=>{let s={},b=/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/,i=/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/,c=/^.{1,1000}$/;return n.name.trim()?b.test(n.name)||(s.name='El campo "Nombre" solo acepta letras y espacios.'):s.name='El campo "Nombre" no debe ser vacío.',n.email.trim()?i.test(n.email)||(s.email='El campo "Correo" contiene un formato inválido.'):s.email='El campo "Correo" no debe ser vacío.',n.subject.trim()?c.test(n.subject)||(s.subject='El campo "Asunto" solo acepta letras y espacios.'):s.subject='El campo "Asunto" no debe ser vacío.',n.msg.trim()?c.test(n.msg)||(s.msg='El campo "Mensaje" acepta solo 1000 caracteres.'):s.msg='El campo "Mensaje" no debe ser vacío.',s},{form:o,errors:a,loading:p,handleChange:r,handleSubmit:u}=j(m,d);return t(x,{children:[e(g,{}),t("div",{className:"header-contact",children:[e("div",{className:"mb-2",children:e("h2",{className:"font-semibold text-[42px]",children:"Contáctame"})}),t("div",{className:"grid-contact w-full px-28 mt-6 justify-items-center items-center",children:[t("form",{className:"form-square",onSubmit:u,children:[e("p",{className:"",children:"¡Envíame un mensaje! Tan pronto sea posible me contactaré contigo."}),t("label",{className:"text-left form-group mt-4",children:[e("input",{className:"form-input h-[50px] form-input_request_quotation",placeholder:" ",type:"text",name:"name",value:o.name,onChange:r}),e("span",{className:"form-input_label",children:"Nombre"})]}),a.name&&e("div",{className:"border rounded bg-[#ffc0c093] p-[5px] !text-red-500 font-semibold h-[100%] flex justify-center items-center",children:a.name}),t("label",{className:"text-left form-group mt-4",children:[e("input",{className:"form-input h-[50px] form-input_request_quotation",placeholder:" ",type:"text",name:"email",value:o.email,onChange:r}),e("span",{className:"form-input_label",children:"Correo"})]}),a.email&&e("div",{className:"border rounded bg-[#ffc0c093] p-[5px] !text-red-500 font-semibold h-[100%] flex justify-center items-center",children:a.email}),t("label",{className:"text-left form-group mt-4",children:[e("input",{className:"form-input h-[50px] form-input_request_quotation",placeholder:" ",type:"text",name:"subject",value:o.subject,onChange:r}),e("span",{className:"form-input_label",children:"Asunto"})]}),a.subject&&e("div",{className:"border rounded bg-[#ffc0c093] p-[5px] !text-red-500 font-semibold h-[100%] flex justify-center items-center",children:a.subject}),t("label",{className:"text-left form-group mt-4 !min-h-[100px]",children:[e("textarea",{className:"form-input !h-[100px] !min-h-[100px] p-2 form-input_request_quotation",placeholder:" ",name:"msg",cols:"30",rows:"10",value:o.msg,onChange:r}),e("span",{className:"form-input_label",children:"Mensaje"})]}),a.msg&&e("div",{className:"border rounded bg-[#ffc0c093] p-[5px] !text-red-500 font-semibold h-[100%] flex justify-center items-center",children:a.msg}),e("div",{className:"flex justify-center items-center",children:e("button",{className:"btn-secondary_submit mt-4 !w-[165px] !text-[16px]",disabled:p,children:p?"Enviando...":"Enviar"})})]}),t("div",{className:"contact-square",children:[t("a",{href:"tel:+573017909110",target:"_blank",className:"resp-btn aButton contactButton",children:[e("span",{}),e("span",{}),e("span",{}),e("span",{}),e("i",{className:"bx bxs-phone iconCon"}),"+57 (301) 790 9110"]}),t("a",{href:"mailto:juanfernando2197@hotmail.com",target:"_blank",className:"resp-btn aButton contactButton",children:[e("span",{}),e("span",{}),e("span",{}),e("span",{}),e("i",{className:"bx bxs-envelope iconCon"}),"juanfernando2197@hotmail.com"]}),t("a",{href:"https://wa.me/573017909110",target:"_blank",className:"resp-btn aButton contactButton",children:[e("span",{}),e("span",{}),e("span",{}),e("span",{}),e("i",{className:"bx bxl-whatsapp iconCon"}),"WA: 301 790 9110"]})]})]})]}),e(N,{})]})};export{y as default};