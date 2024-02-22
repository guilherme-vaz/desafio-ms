import * as C from './style'
import logo1 from '../../assets/imgs/logo1.png'


export function Home() {
    return (
        <C.Container>
            <C.Menu>
                <img src={logo1} alt="" />
                <p>Cursos</p>
                <p>Eventos</p>
                <p>Quem somos</p>
                <p>+55 (81) 3030-1293</p>
                <button>Login</button>
            </C.Menu>

            <C.Header >
                A MESHI é um novo começo
                <p>para a sua careira</p>
            </C.Header>
            <C.Subtitle>
                Somos uma escola online com tudo que você precisa 
                para conquistar <br /> profissões em alta no mercado 
                de trabalho
            </C.Subtitle>
        </C.Container>
    )
}