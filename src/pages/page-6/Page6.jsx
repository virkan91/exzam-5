import React from "react";
import "./page6.css";

import man from "../../assets/06-page/man.jpg";
import olic from "../../assets/06-page/olic.png"

const Page6 = () => {
  return (
    <div>
      <section className="bg-sec">
        <div className="container">
          <div className="text-center md:w-[40%] m-auto w-full mb-[40px]">
            <p>
              Главная / <span className="font-bold">О компания</span>
            </p>
          </div>
          <div className="sm:flex sm:flex-col md:flex md:flex-row bg-[#FFF]  items-center drop-shadow-md">
            <div>
              <div className="flex gap-20 items-center">
                <div className="bg-[#FEAD04] text-[#FFF] md:w-[63%] w-full  leading-5 p-[3px_30px] relative md:right-[3%] right-0">
                  <h2 className="text-[18px] font-bold">
                    Верещинский Александр Павлович
                  </h2>
                  <p>Основатель компании, доктор технических наук</p>
                </div>
                <svg
                  className="hidden md:flex"
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                >
                  <path d="M0 5.5V38.5L16.5 22V5.5H0Z" fill="#FEAD04" />
                  <path d="M27.5 5.5V38.5L44 22V5.5H27.5Z" fill="#FEAD04" />
                </svg>
              </div>
              <div className=" pl-[40px] md:w-[66%] mt-[40px] w-full">
                <p>
                  Наши знания и возможности для Вас открыты и доступны. Рады
                  будем принимать Вас в нашей компании и в нашем городе.
                </p>
                <p className="text-[#FEAD04] font-bold mt-3">
                  с Уважением, Верещинский Александр Павлович
                </p>
              </div>
            </div>
            <div className="pr-[40px] mt-[40px] ">
              <img src={man} alt="" className="" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-[60px]">
        <div className="container">
          <div>
            <h2 className="text-[40px] text-[#444] font-bold">О компании</h2>
            <p>
              ООО “ОЛИС”{" "}
              <span className="text-[#FEAD04] font-bold">
                специализируется в разработке, производстве и внедрении
              </span>
              в промышленность технологий и оборудования для переработки зерна
            </p>
          </div>
          <div className="sec_p grid md:grid-cols-7 grid-cols-1 mt-[30px]">
            <div className="col-span-3">
              <h2 className="text-[#FEAD04] text-[22px] font-bold	">
                Сегодня мы:{" "}
              </h2>
              <p className="mt-[20px]">
                Обладаем оригинальными современными технологиями и оборудованием
                по всем основным направлениям очистки зерна, производства муки и
                крупы, что подтверждается более чем 30-ю патентами в указанной
                области;
              </p>
              <p>Выпускаем около 200-т наименований оборудования</p>
              <p>
                Располагаем возможностью производства различных
                зерноочистительных комплексов, мельниц и крупоцехов от этапа
                разработки технологии до ввода объектов в эксплуатацию на
                оборудовании собственного производства.
              </p>
            </div>
            <div className="col-span-4 mt-[40px] md:mt-auto">
              <h2 className="text-[#FEAD04] text-[22px] font-bold">
                Наша миссия
              </h2>
              <p>
                Среди развиваемых нами направлений особое внимание уделяется
                контролю качества зерна и продуктов его переработки. Результаты
                приложенных усилий воплощены в более чем 20-ти наименованиях
                серийно выпускаемых лабораторных приборов. С гордостью сообщаем,
                что в Украине, которая является крупнейшим мировым
                производителем зерна, каждая лаборатория по оценке его качества
                работает на оборудовании нашего производства!
              </p>
              <p>
                На нашем предприятии внедрены и используются самые современные
                технологии проектирования, конструирования и обработки металлов,
                а также управления качеством и предприятием в целом.
                Технологический уровень и организация нашего производства
                позволяет обеспечить высокое качество изделий по убедительным
                ценам и поставлять их более чем в 25 стран ближнего и дальнего
                зарубежья. Прилагаемые в течении двадцати лет усилия позволили
                нам завоевать это доверие.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[3px]">
        <div className="container">
          <div className="sm:flex sm:flex-col md:flex md:flex-row items-center gap-4">
            <div className="sec_p  w-[100%] ">
              <p>
                <span className="text-[#FEAD04] font-bold">
                  Мы изобретаем, экспериментируем, проектируем
                </span>
                , конструируем, изготавливаем, внедряем, обучаем и постоянно
                учимся сами. Отличительным нашим принципом является поиск
                рациональных методов для решения сложных технологических задач,
                что позволяет обеспечить значительный экономический эффект при
                внедрении. Поэтому наши проекты и отдельные изделия выгодно
                отличаются эффективностью от созданных по традиционным подходам.
              </p>
              <p>
                Основу исследовательского и инженерно-технического персонала
                нашего предприятия составляют{" "}
                <span className="text-[#FEAD04] font-bold">
                  лучшие выпускники Одесской национальной академии
                </span>{" "}
                пищевых технологий, получившие огромный практический опыт на
                предприятиях отрасли хлебопродуктов. Основой конструкторской
                группы и производственного персонала являются бывшие работники
                станкостроительных предприятий г. Одессы, чей высокий
                профессионализм известен далеко за пределами нашего города.
              </p>
            </div>

            <div className="mt-[30px] md:mt-auto">
              <img src={olic} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-[60px]">
        <div className="container">
          <div className="border-2 w-[33%] m-auto text-center">
            <h2 className="text-[#444] text-[26px] font-bold">
              НАПРАВЛЕНИЯ ДЕЯТЕЛЬНОСТИ ООО "ОЛИС"
            </h2>
          </div>
          <div className="grid md:grid-cols-4 grid-cols-1 py-[30px] gap-[10px]">
            <div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="7"
                  viewBox="0 0 7 7"
                  fill="none"
                >
                  <circle cx="3.5" cy="3.5" r="3.5" fill="#FEAD04" />
                </svg>
                <p>Зерноочистительные комплексы</p>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="7"
                  viewBox="0 0 7 7"
                  fill="none"
                >
                  <circle cx="3.5" cy="3.5" r="3.5" fill="#FEAD04" />
                </svg>
                <p>Крупоцеха универсальные агрегатные</p>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="7"
                  viewBox="0 0 7 7"
                  fill="none"
                >
                  <circle cx="3.5" cy="3.5" r="3.5" fill="#FEAD04" />
                </svg>
                <p>Крупоцеха универсальные комплектные</p>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="7"
                  viewBox="0 0 7 7"
                  fill="none"
                >
                  <circle cx="3.5" cy="3.5" r="3.5" fill="#FEAD04" />
                </svg>
                <p>Крупоцеха универсальные комплектные</p>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="7"
                  viewBox="0 0 7 7"
                  fill="none"
                >
                  <circle cx="3.5" cy="3.5" r="3.5" fill="#FEAD04" />
                </svg>
                <p>Крупоцеха по переработке овса</p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="7"
                  viewBox="0 0 7 7"
                  fill="none"
                >
                  <circle cx="3.5" cy="3.5" r="3.5" fill="#FEAD04" />
                </svg>
                <p>Зерноочистительные комплексы</p>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="7"
                  viewBox="0 0 7 7"
                  fill="none"
                >
                  <circle cx="3.5" cy="3.5" r="3.5" fill="#FEAD04" />
                </svg>
                <p>Зерноочистительные комплексы</p>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="7"
                  viewBox="0 0 7 7"
                  fill="none"
                >
                  <circle cx="3.5" cy="3.5" r="3.5" fill="#FEAD04" />
                </svg>
                <p>Зерноочистительные комплексы</p>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="7"
                  viewBox="0 0 7 7"
                  fill="none"
                >
                  <circle cx="3.5" cy="3.5" r="3.5" fill="#FEAD04" />
                </svg>
                <p>Зерноочистительные комплексы</p>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="7"
                  viewBox="0 0 7 7"
                  fill="none"
                >
                  <circle cx="3.5" cy="3.5" r="3.5" fill="#FEAD04" />
                </svg>
                <p>Зерноочистительные комплексы</p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="7"
                  viewBox="0 0 7 7"
                  fill="none"
                >
                  <circle cx="3.5" cy="3.5" r="3.5" fill="#FEAD04" />
                </svg>
                <p>Зерноочистительные комплексы</p>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="7"
                  viewBox="0 0 7 7"
                  fill="none"
                >
                  <circle cx="3.5" cy="3.5" r="3.5" fill="#FEAD04" />
                </svg>
                <p>Зерноочистительные комплексы</p>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="7"
                  viewBox="0 0 7 7"
                  fill="none"
                >
                  <circle cx="3.5" cy="3.5" r="3.5" fill="#FEAD04" />
                </svg>
                <p>Зерноочистительные комплексы</p>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="7"
                  viewBox="0 0 7 7"
                  fill="none"
                >
                  <circle cx="3.5" cy="3.5" r="3.5" fill="#FEAD04" />
                </svg>
                <p>Зерноочистительные комплексы</p>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="7"
                  viewBox="0 0 7 7"
                  fill="none"
                >
                  <circle cx="3.5" cy="3.5" r="3.5" fill="#FEAD04" />
                </svg>
                <p>Зерноочистительные комплексы</p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="7"
                  viewBox="0 0 7 7"
                  fill="none"
                >
                  <circle cx="3.5" cy="3.5" r="3.5" fill="#FEAD04" />
                </svg>
                <p>Зерноочистительные комплексы</p>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="7"
                  viewBox="0 0 7 7"
                  fill="none"
                >
                  <circle cx="3.5" cy="3.5" r="3.5" fill="#FEAD04" />
                </svg>
                <p>Зерноочистительные комплексы</p>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="7"
                  viewBox="0 0 7 7"
                  fill="none"
                >
                  <circle cx="3.5" cy="3.5" r="3.5" fill="#FEAD04" />
                </svg>
                <p>Зерноочистительные комплексы</p>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="7"
                  viewBox="0 0 7 7"
                  fill="none"
                >
                  <circle cx="3.5" cy="3.5" r="3.5" fill="#FEAD04" />
                </svg>
                <p>Зерноочистительные комплексы</p>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="7"
                  viewBox="0 0 7 7"
                  fill="none"
                >
                  <circle cx="3.5" cy="3.5" r="3.5" fill="#FEAD04" />
                </svg>
                <p>Зерноочистительные комплексы</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page6;
