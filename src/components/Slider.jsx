import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import "./Body.css";

import { Navigation } from 'swiper/modules';
import Card from './Card';

export default function Slider() {
    const data = [
        {
            title: "Engenharia de Software",
            category: "Bacharelado | Presencial",
            description: "O trabalho desenvolvido pelo Engenheiro de Software tem como foco a melhoria da produtividade de diferentes áreas do mercado de trabalho, do ensino, assim como do lazer.",
            image: "https://blog.brq.com/wp-content/uploads/sites/3/2022/01/engenharia_software.jpg"
        },
        {
            title: "Sistemas de Informação",
            category: "Bacharelado | Presencial",
            description: "O curso capacita o aluno a planejar, desenvolver e gerenciar sistemas de informação, visando atender às necessidades de organizações e empresas.",
            image: "https://www.infoescola.com/wp-content/uploads/2010/04/engenharia-de-software_699634498.jpg"
        },
        {
            title: "Análise e Desenvolvimento de Sistemas",
            category: "Tecnólogo | Presencial",
            description: "O tecnólogo em Análise e Desenvolvimento de Sistemas é preparado para atuar no desenvolvimento e manutenção de sistemas de software, aplicando metodologias e práticas ágeis.",
            image: "https://blog.estacio.br/wp-content/uploads/2022/07/o-que-um-engenheiro-de-software-faz.jpeg"
        },
    ];

    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {data.map((course, index) => (
                <SwiperSlide key={index}>
                    <Card 
                        title={course.title}
                        category={course.category}
                        description={course.description}
                        image={course.image}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
