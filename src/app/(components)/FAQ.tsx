import Image from "next/image";
import ModelViewer from "./Test3DModel";

export default function FAQ() {
  return (
    <section dir="rtl" className="py-12 bg-gradient-to-t from-gray-950 to-[#c47a0a]">
      <div className="container max-w-5xl mx-auto m-8">
        <h2
          className="w-full my-2 text-5xl  leading-tight text-center text-white arabic-medium"
        >
          FAQ
        </h2>
        <div className="w-full mb-4">
          <div
            className="h-1 mx-auto bg-gradient-to-r via-amber-950 from-brown-900 to-black w-64 opacity-75 my-0 py-0 rounded-t"
          ></div>
        </div>

        <div className="flex flex-wrap items-center">
          <div className="w-5/6 sm:w-1/2 p-6">
            <h3 className="text-3xl text-white font-bold leading-none mb-3">
              من نحن؟
            </h3>
            <p className="text-white mb-8 text-2xl arabic-medium">
              نحن فريق Jordan Cyber Club نسعى الى تعزيز
              الوعي بالأمن السيبراني وتطوير مهارات الشباب في
              الأردن.
            </p>
          </div>
          <div className="flex justify-center w-full sm:w-1/2 p-6">
            <Image
              src="/images/jordan.jpeg"
              alt="cyber security"
              width={350}
              height={350}
              className="border border-yellow-600 rounded p-2"
            />
          </div>
        </div>
        <div className="flex flex-wrap flex-col-reverse sm:flex-row items-center">
          <div className="flex justify-center w-full sm:w-1/2 p-6 mt-6">
            <Image
              src="/images/cyber_security.jpeg"
              alt="cyber security"
              width={350}
              height={350}
              className="border border-yellow-600 rounded p-2"
            />
          </div>
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <div className="align-middle arabic-medium">
              <h3 className="text-3xl text-white font-bold leading-none mb-3">
                ما هي أهدافنا؟
              </h3>
              <div className="text-white mb-8 text-xl pt-2">
                <ul className="list-disc">
                  <li className="my-2">أن نكون المرجع الأول في مجال الأمن السيبراني</li>
                  <li className="my-2">بناء جيل من الشباب الملهم والمتخصصين في المجال</li>
                  <li className="my-2">تطوير مهارات الشباب في مجال الأمن السيبراني</li>
                  <li className="my-2">تعزيز الوعي بالأمن السيبراني</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
