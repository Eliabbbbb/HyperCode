class Integrante {
    constructor(nombre, edad, descripcion, imagen) {
        this.nombre = nombre;
        this.edad = edad;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }
}

const equipo = [
    new Integrante(
        "Ana García", 
        28, 
        "Diseñadora UX/UI con más de 5 años de experiencia. Apasionada por crear interfaces intuitivas y hermosas que mejoren la experiencia del usuario.",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    ),
    new Integrante(
        "Carlos Rodríguez", 
        32, 
        "Desarrollador Full Stack especializado en JavaScript. Le encanta resolver problemas complejos y aprender nuevas tecnologías.",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    ),
    new Integrante(
        "María López", 
        26, 
        "Especialista en Marketing Digital con enfoque en redes sociales. Creativa y analítica, siempre busca la mejor estrategia para cada cliente.",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    ),
    new Integrante(
        "Javier Martínez", 
        35, 
        "Project Manager con amplia experiencia en metodologías ágiles. Su liderazgo ha guiado exitosamente más de 20 proyectos.",
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    ),
    new Integrante(
        "Laura Fernández", 
        29, 
        "Desarrolladora Frontend con expertise en React y Vue. Siempre busca implementar las mejores prácticas y código limpio.",
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    ),
    new Integrante(
        "Alí Israel Astete Romero", 
        24, 
        "Especialista en SEO y análisis de datos. Su trabajo ha aumentado el tráfico orgánico de numerosos sitios web en más del 200%.",
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    )
];