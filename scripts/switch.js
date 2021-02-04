var signo = prompt('Cual es tu signo?');

console.log(signo);

switch (signo) {
    case 'acuario':
        console.log('Invoque al Arcángel Miguel, para que lo cubra con su luz, libere del sufrimiento, lo defienda contra las fuerzas del mal, la ignorancia y la inconciencia. Para que lo apoye y atienda las suplicas de los que buscan justicia, le enseñe a decidir, lo libere del miedo, aumente su fe y fuerza de voluntad. Semana para trabajar la seguridad en sí mismo y las metas. Encienda una vela de color azul.');
        break;
    case 'piscis':
        console.log('Invoque al Arcángel Ariel, para que lo conduzca por senderos que le permitan cumplir sus objetivos más nobles, lo ponga en contacto con la fuerza creativa de la naturaleza, para ayudar al planeta y proteger a los animales. Para que le brinde libertad de acción, lo ayude a resolver dificultades con discreción y fortalezca su espíritu. Semana para trabajar la piedad y la caridad. Encienda una vela de color dorado.');
        break;
    default:
        console.log('Invoque al Arcángel Metatron, para que lo bañe con su luz y lo proteja contra las adversidades, lo ayude a encontrar la medida apropiada en el amor, el trabajo y el recreo, le enseñe a dejar a un lado los hábitos adictivos, armonizar lo que da con lo que recibe, su entendimiento, paciencia y autoestima. Semana para trabajar el sentido del humor y la misión de vida. Encienda una vela de color blanco.')
        break;
}