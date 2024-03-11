import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookSquare, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

// Dados dos projetos
const projetos = [
    { nome: 'Projeto 1', link: '', descricao: 'Descrição do Projeto 1' },
    { nome: 'Projeto 2', link: 'link_do_projeto_2', descricao: 'Descrição do Projeto 2' },
];

// Dados das apresentações
const apresentacoes = [
    { nome: 'Relatório de Análise de Dados', link: 'https://docs.google.com/presentation/d/1LBbquiNI1Tw5-2ufp06Po7tZAo4P03wg/edit?usp=sharing&ouid=106732038491601060572&rtpof=true&sd=true', descricao: 'Este relatório de análise de dados tem como objetivo mostrar a expansão dos serviços de internet no ano de 2022 na cidade de Aracaju, estado de Sergipe. Confira no link abaixo:' },
    { nome: 'Programa em Python', link: 'https://docs.google.com/presentation/d/14xa7XtncUEyYLD9AYZJdU8lZm-y7Cv1X/edit?usp=sharing&ouid=106732038491601060572&rtpof=true&sd=true', descricao: 'Programa em Python para ver as médias dos alunos. Confira no link abaixo:' },
];

function App() {
    return ( <
        div className = "App" >
        <
        header className = "App-header" >
        <
        h1 > Mikael Tech Portfolio < /h1> <
        nav >
        <
        ul >
        <
        li > < a href = "#sobre-mim" > Sobre Mim < /a></li >
        <
        li > < a href = "#projetos" > Projetos < /a></li >
        <
        li > < a href = "#videos" > Vídeos < /a></li >
        <
        li > < a href = "#apresentacoes" > Apresentações < /a></li >
        <
        li > < a href = "#contato" > Contato < /a></li >
        <
        li > < a href = "#redes-sociais" > Redes Sociais < /a></li >
        <
        /ul> < /
        nav > <
        /header> <
        main >
        <
        section id = "sobre" >
        <
        h2 > Sobre Mim < /h2> <
        p > Olá, sou Mikael, um desenvolvedor dedicado à criação de soluções incríveis com tecnologia.Este é o meu portfólio, um espaço onde compartilho uma seleção dos meus projetos mais recentes, apresentações e vídeos.Sintam - se convidados a explorar e descobrir o mundo de possibilidades que a tecnologia oferece! < /p> < /
        section >

        <
        section id = "projetos" >
        <
        h2 > Projetos < /h2> <
        ul > {
            projetos.map(projeto => ( <
                li key = { projeto.nome } >
                <
                p > { projeto.descricao } < /p> <
                a href = { projeto.link } > { projeto.nome } < /a> < /
                li >
            ))
        } <
        /ul> < /
        section >

        <
        section id = "videos" >
        <
        h2 > Vídeos < /h2> <
        div className = "video-container" >
        <
        iframe title = "Vídeo de Apresentação"
        src = "link_do_video"
        frameBorder = "0"
        allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen > < /iframe> < /
        div > <
        /section>

        <
        section id = "apresentacoes" >
        <
        h2 > Apresentações < /h2> <
        ul > {
            apresentacoes.map(apresentacao => ( <
                li key = { apresentacao.nome } >
                <
                p > { apresentacao.descricao } < /p> <
                a href = { apresentacao.link } > { apresentacao.nome } < /a> < /
                li >
            ))
        } <
        /ul> < /

        section >

        <
        section id = "contato" >
        <
        h2 > Contato < /h2> <
        p > Entre em contato comigo: < /p> <
        ul >
        <
        li > E - mail: Lucasmikael02 @icloud.com < /li> <
        li > Telefone: (79) 99693 - 0591 < /li> < /
        ul > <
        /section>

        <
        section id = "redes-sociais" >
        <
        h2 > Redes Sociais < /h2> <
        ul className = "social-icons" >
        <
        li > < a href = "https://www.instagram.com/mikaelluc10?igsh=em93c3R4cjdxeWtl&utm_source=qr" > < FontAwesomeIcon icon = { faInstagram }
        /> Instagram</a > < /li> <
        li > < a href = "https://www.facebook.com/mikael.lucas.1232" > < FontAwesomeIcon icon = { faFacebookSquare }
        /> Facebook</a > < /li> <
        li > < a href = "https://x.com/mikaellucassss/" > < FontAwesomeIcon icon = { faTwitter }
        /> Twitter</a > < /li> <
        li > < a href = "https://wa.me/5579996930591" > < FontAwesomeIcon icon = { faWhatsapp }
        /> WhatsApp</a > < /li> < /
        ul > <
        /section> < /
        main > <
        footer >
        <
        p > { new Date().getFullYear() }
        Mikael Tech Portfolio < /p> < /
        footer > <
        /div>
    );
}

export default App;