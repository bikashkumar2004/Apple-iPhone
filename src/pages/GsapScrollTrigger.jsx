import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const GsapScrollTrigger = () => {
    const scrollRef = useRef();

    useGSAP(() => {
        const boxes = gsap.utils.toArray(scrollRef.current.children);

        boxes.forEach(box => {
            gsap.to(box, {
                x: 150 * (boxes.indexOf(box) + 5),
                rotation: 360,
                borderRadius: '100%',
                scale: 1.5,
                scrollTrigger:{
                    trigger: box,
                    start: 'bottom bottom',
                    end: 'top 10%',
                    scrub: true
                },
                ease: 'power1.inOut'
            });
        })
    }, {scope: scrollRef});

    return (
        <>
            <h1 className="font-black my-96">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui iure, alias odio, neque nostrum nulla ex veniam sint itaque quod beatae, eveniet quibusdam doloremque. Unde eligendi harum temporibus beatae, provident officiis recusandae consequatur ipsum eaque nulla nostrum delectus illum. Dignissimos nihil reprehenderit nulla doloribus neque repellat, soluta error libero in nesciunt asperiores, quidem eum. Sit, harum quam quisquam aperiam totam alias excepturi rerum laboriosam aut. Dicta, cumque sapiente earum omnis unde doloribus nihil voluptatem ab quod tempore, assumenda consectetur vel blanditiis nam! Dignissimos, illum, dolorem ab quaerat enim officiis facilis incidunt molestiae quibusdam alias magni, vitae doloremque eaque neque laborum quidem. Reiciendis magnam possimus veritatis cupiditate, pariatur iure doloremque tenetur dolorum nobis laborum quae voluptate! Ipsum dignissimos amet expedita saepe. Est veritatis quo unde tempora dolores temporibus ab aspernatur obcaecati distinctio recusandae repellendus, corrupti vero eius, libero minima repellat illum omnis necessitatibus cupiditate eos? At voluptatem perferendis beatae accusamus ea distinctio reiciendis asperiores ex, praesentium iusto expedita reprehenderit quo, qui illo dicta ullam omnis quidem explicabo ab. Odit ipsa necessitatibus minima pariatur eligendi! Repellendus tempora optio adipisci aliquam nobis dolore. Suscipit nemo distinctio natus adipisci eos veniam et autem placeat perferendis atque, blanditiis cupiditate deleniti amet, aspernatur dolorem in repudiandae iste expedita aliquam reprehenderit hic assumenda. Minus illum quaerat possimus repellat nemo laudantium accusantium! Voluptatibus quod fuga est vitae? Quo modi in unde soluta aliquam, voluptate aut laboriosam provident, delectus explicabo magnam. Debitis, quam non? Distinctio praesentium necessitatibus impedit dolorem id, provident voluptates omnis ipsum beatae? Veritatis ducimus odio aliquam eveniet minima ratione ut rerum tempora nesciunt reprehenderit facilis illo nemo unde deserunt, error est ea, necessitatibus, consequuntur dignissimos magni! Suscipit neque repellendus vel enim amet est nisi omnis deleniti deserunt atque ullam pariatur illo maiores a odit, labore alias rem. Aliquam, a blanditiis, nam iusto nihil, doloremque magni similique debitis obcaecati sequi aspernatur adipisci praesentium nemo laborum quibusdam ab ducimus eaque! Reiciendis excepturi eaque consequatur. Fugit maxime, similique ex reprehenderit, vel obcaecati exercitationem illum repellendus amet nobis earum dolores qui! Velit voluptatem, dignissimos officiis commodi pariatur tenetur, aperiam fugit expedita incidunt quas ratione earum distinctio. Dolore dolor est fuga odio adipisci vel provident, assumenda sint recusandae iusto aliquid quos molestiae doloremque hic, nobis autem totam. Unde illum et nisi tempora quae perspiciatis magni provident, similique, incidunt amet pariatur? Architecto, aperiam rem nam quaerat possimus temporibus provident enim, dicta incidunt in nisi facilis neque assumenda iure reiciendis. Reiciendis repellendus omnis esse numquam laborum! Quas omnis maiores reiciendis voluptas provident voluptates velit deserunt quaerat veritatis nam, laboriosam iure deleniti. Modi, ipsa! Exercitationem iure vitae error facilis similique voluptatum, rerum doloremque vero quos cum totam fugit maxime ab tempora molestiae eligendi nobis itaque? Ex deserunt dolorem quisquam itaque rem molestiae quas soluta, perferendis, sequi cupiditate iure excepturi quod animi doloribus fuga aliquam corrupti? Ullam velit temporibus consequuntur recusandae maiores possimus alias blanditiis dolores hic corporis aliquid cum saepe, ut perferendis earum in voluptatum excepturi consectetur maxime quidem, repellat dolorem expedita eos eius! Accusamus voluptatum veritatis culpa odio esse quis tenetur omnis eos?</h1>
            <h1>GsapScrollTrigger</h1>
            <div className="mt-20 w-full h-screen" ref={scrollRef}>
                <div id="scroll-blue" className="w-20 h-20 bg-blue-500 rounded-lg"></div>
                <div id="scroll-orange" className="w-20 h-20 bg-orange-500 rounded-lg"></div>
            </div>
        </>
    );
};

export default GsapScrollTrigger;
