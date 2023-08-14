import React from "react";
import "./page3.css";

import olis from "../../assets/02-page/olis.png";
import mask1 from "../../assets/03-page/mask1.png";
import imblue from "../../assets/03-page/imblue.png"
import opar from "../../assets/03-page/opar.jpg"

const Page3 = () => {
  return (
    <div>
      <section>
        <div className="container">
          <div className="text-center  md:w-[40%] m-auto w-full">
            <p>Главная / Комплексные решения</p>
            <h2 className="md:text-[50px] text-[30px] text-[#000] font-bold leading-[45px] mt-[10px]">
              Комплексные решения
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10 py-[50px]">
            <div className="bg_grid">
              <div className="bg-[#FEAD04] text-[#FFF] w-[63%] relative top-[-92%] md:right-[2%] right-0 leading-5 p-[3px_30px]">
                <h2 className="text-[18px] font-bold">
                  Зерноочистительные комплексы
                </h2>
              </div>
            </div>
            <div className="bg_grid2">
              <div className="bg-[#FEAD04] text-[#FFF] w-[63%] relative top-[-92%] md:right-[2%] right-0 leading-5 p-[12px_30px]">
                <h2 className="text-[18px] font-bold">Крупозаводы</h2>
              </div>
            </div>
            <div className="bg_grid3">
              <div className="bg-[#FEAD04] text-[#FFF] w-[63%] relative top-[-92%] md:right-[2%] right-0 leading-5 p-[12px_30px]">
                <h2 className="text-[18px] font-bold">Мельницы</h2>
              </div>
            </div>
            <div className="bg_grid4">
              <div className="bg-[#FEAD04] text-[#FFF] w-[63%] relative top-[-92%] md:right-[2%] right-0 leading-5 p-[3px_11px]">
                <h2 className="text-[18px] font-bold">
                  Комплексное оснащение лабораторий
                </h2>
              </div>
            </div>
            <div className="bg_grid5">
              <div className="bg-[#FEAD04] text-[#FFF] w-[63%] relative top-[-92%] md:right-[2%] right-0 leading-5 p-[3px_11px]">
                <h2 className="text-[18px] font-bold">
                  Комплексное оснащение лабораторий
                </h2>
              </div>
            </div>
            <div className="bg_grid6">
              <div className="bg-[#FEAD04] text-[#FFF] w-[63%] relative top-[-92%] md:right-[2%] right-0 leading-5 p-[3px_30px]">
                <h2 className="text-[18px] font-bold">
                  Переработка семян конопли
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[60px]">
        <div className="container">
          <div className="sm:flex sm:flex-col md:flex md:flex-row gap-5 items-center">
            <div className=" md:w-[60%] w-full">
              <p>
                <span className="text-[#000] font-bold">
                  Наша страна давно заслужила славу
                </span>{" "}
                "хлебной корзины". В бывшие республики Советского Союза Украина
                поставляла свыше 25 процентов всей производимой
                сельскохозяйственной продукции. Сегодня Украина - один из
                мировых лидеров по экспорту зерновых и продуктов их переработки.
                Однако, в нашей стране умеют не только выращивать и
                перерабатывать зерно. В Украине есть достаточно мощный потенциал
                по созданию зерноперерабатывающих технологий и оборудования в
                разных направлениях очистки зерна, производства муки, крупы, а
                также оценки качества.
                <p className="text-[#000] font-bold mt-2">
                  Объекты переработки зерна
                </p>{" "}
                – это сложные и дорогостоящие инженерные сооружения. Там среди
                глыб бетона, металлоконструкций и паутины проводов всегда
                находится что-то более важное, то что все это делает эффективным
                или бесполезным. Ведь только технология – настоящий венец любого
                производства. И прежде чем строить бизнес-планы, а тем более их
                выполнять, мы предлагаем Вам хорошенько во всем
              </p>
              <p>
                <p className="text-[#000] font-bold mt-2">Переработка зерна</p>{" "}
                - это совокупность сложных технологических процессов,
                затрагивающих почти все разделы знаний современного человека. На
                элеваторах, мельзаводах и крупозаводах математика, физика и
                химия превращаются в сонм инженерных прикладных наук, являющихся
                основой технологии и способов ее реализации. За каждой
                технологией переработки зерна и ее аппаратным обеспечением стоит
                многовековой путь эволюции, определяющий их современное
                состояние.
              </p>
            </div>
            <div className="mt-[20px] md:mt-auto">
              <img src={imblue} alt="" />
            </div>
          </div>
          <div className="sm:flex sm:flex-col md:flex md:flex-row gap-5 mt-[4git 0px] md:mt-0 ">
            <div className=" ">
              <img src={opar} alt="" />
            </div>
            <div className="md:w-[90%] w-full">
              <p className="mt-[30px]">
                <span className="text-[#000] font-bold">
                  Наша страна давно заслужила славу
                </span>{" "}
                "хлебной корзины". В бывшие республики Советского Союза Украина
                поставляла свыше 25 процентов всей производимой
                сельскохозяйственной продукции. Сегодня Украина - один из
                мировых лидеров по экспорту зерновых и продуктов их переработки.
                Однако, в нашей стране умеют не только выращивать и
                перерабатывать зерно. В Украине есть достаточно мощный потенциал
                по созданию зерноперерабатывающих технологий и оборудования в
                разных направлениях очистки зерна, производства муки, крупы, а
                также оценки качества.
                <p className="text-[#000] font-bold mt-2">
                  Объекты переработки зерна
                </p>{" "}
                – это сложные и дорогостоящие инженерные сооружения. Там среди
                глыб бетона, металлоконструкций и паутины проводов всегда
                находится что-то более важное, то что все это делает эффективным
                или бесполезным. Ведь только технология – настоящий венец любого
                производства. И прежде чем строить бизнес-планы, а тем более их
                выполнять, мы предлагаем Вам хорошенько во всем
              </p>
              <p>
                <p className="text-[#000] font-bold mt-2">Переработка зерна</p>{" "}
                - это совокупность сложных технологических процессов,
                затрагивающих почти все разделы знаний современного человека. На
                элеваторах, мельзаводах и крупозаводах математика, физика и
                химия превращаются в сонм инженерных прикладных наук, являющихся
                основой технологии и способов ее реализации. За каждой
                технологией переработки зерна и ее аппаратным обеспечением стоит
                многовековой путь эволюции, определяющий их современное
                состояние.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg_section py-[30px]">
        <div className="container">
          <div className="md:flex  justify-between flex-wrap items-center">
            <div>
              <img src={olis} alt="" />
            </div>
            <form className="bg-[#FFFFFF] md:w-[45%] p-[40px_50px] w-full mt-[30px] md:mt-auto">
              <h2 className="text-[32px] font-light	">Форма обратной связи</h2>
              <p>Заполните форму и мы свяжемся с вами</p>
              <div className="py-[25px] flex gap-6">
                <input type="text" placeholder="Иван" />
                <input type="text" placeholder="Телефон" />
              </div>
              <div>
                <input type="text" placeholder="Email" className="w-[100%]" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page3;
