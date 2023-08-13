import React from "react";
import "./page2.css";

// image
import im1 from "../../assets/02-page/im1.png";
import im2 from "../../assets/02-page/im2.png";
import kt1 from "../../assets/02-page/kt1.png"
import immen from "../../assets/02-page/immen.png"
import immen2 from "../../assets/02-page/immen2.png"
import olis from "../../assets/02-page/olis.png"

const Page2 = () => {
  return (
    <div>
      <section className=" py-[20px]">
        <div className="container">
          <div className="grid md:grid-cols-2 ">
            <div className="">
              <img src={im1} alt="" />
            </div>
            <div className="md:p-[0px_40px] p-[0px_0px] ">
              <div className="md:max-w-[50%]">
                <p className="mt-[20px]">
                  Главная / Комплексные решения /
                  <span className="text-[#000] font-bold">
                    Зерноочистительные комплексы
                  </span>
                </p>
              </div>
              <h1 className="md:text-[50px] font-bold text-[#000] not-italic md:leading-[52px] leading-10 mt-[10px] text-[36px]">
                Зерноочистительные комплексы
              </h1>
              <p className="mt-[15px]">
                Послеуборочная очистка является обязательным звеном производства
                зерна. Эффективность этого процесса прямо влияет на
                эффективность последующих операций (сушка, хранение,
                переработка) и во многом определяет результаты всего
                производства.
              </p>
              <p className="mt-[5px]">
                Зерновой ворох, поступающий на послеуборочную очистку,
                представляет собой смесь полноценного, щуплого и поврежден­ного
                зерна основной культуры, семян различных культурных и сорных
                растений, а также примесей частиц растений, соломы, колосьев,
                половы, песка, комочков земли и др. При этом содер­жание
                примесей в зерне основной культуры может составлять от 2-х до
                15-ти %,
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2">
            <div>
              <h3 className="md:text-[22px] text-[20px] font-bold text-[#000] not-italic leading-[52px] mt-[20px]">
                Предварительная очистка зернового вороха
              </h3>
              <p className="">
                Выделение легких, мелких и крупных примесей с целью обеспечения
                бла­гоприятных условий при выполнении последующих
                техноло­гических операций послеуборочной обработки зерна,
                главным образом его сушки.
              </p>
              {/* <h3 className="md:text-[20px] font-bold text-[#000] not-italic leading-[52px] mt-[10px] text-[36px]">
                Первичная очистка зерна
              </h3>
              <p>
                Выделение крупных, мелких и легких примесей и сортирование на
                основную (про­довольственную и семенную) и фуражную фракции при
                ми­нимальных потерях основного зерна. При этом основная фракция
                должна соответствовать нормам заготовитель­ных базисных
                кондиций. При невысокой засоренности и влаж­ности зерна
                послеуборочную обработку можно начинать с пер­вичной очистки.
              </p> */}
              <h3 className="md:text-[22px] text-[20px] font-bold text-[#000] not-italic leading-[52px] mt-[10px] ">
                Вторичная очистка
              </h3>
              <p>
                Применяется для зерна, прошедшего первичную очистку с целью
                доведения его качества до кондиций продовольственного или
                семенного назначения.
              </p>
              <h3 className="md:text-[22px] text-[20px]  font-bold text-[#000] not-italic leading-[52px] mt-[10px]">
                Сортирование
              </h3>
              <p>
                Разделение зерна основной культуры на фракции по какому-нибудь
                признаку (размерам, плотности, скорости витания и т.д.). К
                сортированию можно отнести и калиброва­ние — разделение семян по
                размерам. Таким образом, послеуборочная очистка представляет
                собой комп­лекс взаимосвязанных и дополняющих друг друга
                технологи­ческих операций, результатом которых является
                обеспечение качества зерна, позволяющего использование его в
                пищевых, фуражных или семенных целях.
              </p>
            </div>
            <div className="">
              <img src={im2} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-[30px]">
          <h2 className="md:text-[50px] font-light	text-center text-[40px] md:text-start">
            пристрої цієї категорії
          </h2>
          <div className="kategori grid md:grid-cols-4 grid-cols-1 gap-4 py-[30px] ">
            <div className="drop-shadow-md bg-[#FFF] p-[28px_20px]">
              <img src={kt1} alt="" />
              <h3>Зерновой барабанный сепаратор "ЛУЧ" ЗСО</h3>
            </div>
            <div className="drop-shadow-md bg-[#FFF] p-[28px_20px]">
              <img src={kt1} alt="" />
              <h3>Зерновой барабанный сепаратор "ЛУЧ" ЗСО</h3>
            </div>
            <div className="drop-shadow-md bg-[#FFF] p-[28px_20px]">
              <img src={kt1} alt="" />
              <h3>Зерновой барабанный сепаратор "ЛУЧ" ЗСО</h3>
            </div>
            <div className="drop-shadow-md bg-[#FFF] p-[28px_20px]">
              <img src={kt1} alt="" />
              <h3>Зерновой барабанный сепаратор "ЛУЧ" ЗСО</h3>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-[60px]">
          <h2 className="md:text-[50px] font-bold	 text-[40px]">Відео</h2>
          <div className="grid md:grid-cols-2 py-[20px] gap-4">
            <div>
              <img src={immen} alt="" />
            </div>
            <div className="bg_man">
              <img src={immen2} alt="" />
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
                <input type="text" placeholder="Телефон"/>
              </div>
              <div>
                <input type="text" placeholder="Email" className="w-[100%]"/>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page2;
