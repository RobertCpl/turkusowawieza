import style from "./Polityka.module.css";
import arrowLink from "./../assets/images/arrowLink.svg";
import { Link } from "react-router-dom";
import Footer from "../Layout/Footer";

function Polityka() {
   return (
      <>
         <div className={style.wraper}>
            <Link to={"/"} className={style.link}>
               <div className={style.linkArrow}>
                  <img src={arrowLink} alt="arrow left" />
               </div>
               Wróć do strony głównej
            </Link>
            <h1 className={style.title}>
               Polityka prywatności
               <span>Turkusowej Wieży</span>
            </h1>
            <div className={style.textWraper}>
               <h3 className={style.sub}>Administracja Danych Osobowych</h3>
               <p className={style.text}>
                  Administratorem Danych Osobowych zbieranych w związku z działalnością Niepublicznej Szkoły Podstawowej
                  Turkowa Wieża oraz Centrum Spotkań jest: Turkusowa Wieża Spółka z o.o. z siedzibą w Warszawie, ul. Z.
                  Romaszewskiego 23, kod 01-874 Warszawa, wpisana do rejestru przedsiębiorców prowadzonego przez Sąd
                  Rejonowy dla m. st. Warszawy, XIII Wydział Gospodarczy Krajowego Rejestru Sądowego pod numerem KRS
                  0000619732, posiadającą REGON: 364522133, NIP: 1182124405.
               </p>
            </div>
            <div className={style.textWraper}>
               <h3 className={style.sub}>Zbierane informacje</h3>
               <p className={style.text}>
                  Informacje są zbierane poprzez
                  <br />
                  <br />
                  <ul>
                     <li>wprowadzanie danych w formularzach kontaktowych i ankietach,</li>
                     <li>zapisywanie w urządzeniach końcowych plików cookie – „ciasteczek”,</li>
                     <li>gromadzenie logów serwera www przez operatora hostingowego.</li>
                  </ul>
               </p>
            </div>
            <div className={style.textWraper}>
               <h3 className={style.sub}>Cel i zakres zbierania danych</h3>
               <p className={style.text}>
                  Podstawą zbierania danych jest dobrowolne ich podanie przez użytkownika za pomocą formularzy
                  kontaktowych umieszczonych na stronie lub wiadomości email:
                  <br />
                  <br />
                  <ul>
                     <li>imię i nazwisko,</li>
                     <li>imię dziecka,</li>
                     <li>data urodzenia dziecka,</li>
                     <li>adres email,</li>
                     <li>nr telefonu,</li>
                     <li>Informacje dot. powodów, dla których rodzic rozważa zapisanie dziecka do Turkusowej Wieży,</li>
                     <li>Informacje nt. oczekiwań rodziców wobec szkoły i dziecka zapisanego do niej,</li>
                     <li>Informacje nt. zapatrywań rodziców na kwestie kar, nagród i pochwał,</li>
                     <li>
                        Informacje jak ważne są dla rodzica określone nurty pedagogiczne (NVC, wartości Jespera Juula,
                        pedagogika M. Montessori, edukacja demokratyczna),
                     </li>
                     <li>
                        Innych informacji dot. dziecka, które mogą być istotne w kontekście zapisania ich do placówek
                        prowadzonych przez Usługodawcę (czy dziecko ma diagnozę lub orzeczenie o potrzebie specjalnego
                        kształcenia, czy bierze udział w terapii, jakie ma usposobienie, czy ma szczególne potrzeby
                        rozwojowe),
                     </li>
                  </ul>
                  <br />
                  Strona internetowa turkusowawieza.pl może zapisać ponadto informacje o parametrach połączenia
                  (oznaczenie czasu, adres IP).
               </p>
            </div>
            <div className={style.textWraper}>
               <h3 className={style.sub}>Cel przetwarzania danych osobowych</h3>
               <p className={style.text}>
                  <ol>
                     <li>
                        Kontaktować się z Tobą w bieżących sprawach, w tym przedstawiania naszych usług i odpowiadania
                        na Twoje pytania. Mamy prawnie uzasadniony interes polegający na możliwości bieżącego kontaktu z
                        klientami i potencjalnymi klientami
                     </li>
                     <li>Sprawdzić dopasowanie naszych usług do Twoich potrzeb.</li>
                     <li>
                        Zapraszać Cię do uczestnictwa w naszych konferencjach, szkoleniach, przekazywać inne informacje
                        o naszej działalności. Mamy prawnie uzasadniony interes polegający na możliwości bieżącego
                        kontaktu z klientami i potencjalnymi klientami
                     </li>
                     <li>
                        Bronić się przed ewentualnymi roszczeniami lub dochodzić ewentualnych roszczeń związanych z
                        zawartą umową. Mamy prawnie uzasadniony interes polegający na możliwości obrony przed
                        roszczeniami lub dochodzenia roszczeń.
                     </li>
                  </ol>
               </p>
            </div>
            <div className={style.textWraper}>
               <h3 className={style.sub}>Okres przechowywania Twoich danych osobowych</h3>
               <p className={style.text}>
                  Będziemy przetwarzać Twoje dane osobowe w okresie wykonywania umowy, a także przez okres przedawnienia
                  roszczeń z umowy.
               </p>
            </div>
            <div className={style.textWraper}>
               <h3 className={style.sub}>Odbiorcy Twoich danych osobowych</h3>
               <p className={style.text}>
                  Będziemy przekazywać Twoje dane osobowe naszym dostawcom, którym zlecimy usługi związane z
                  przetwarzaniem danych osobowych, np. usługi IT, usługi księgowe. Takie podmioty przetwarzają dane na
                  podstawie umowy z nami i tylko zgodnie z naszymi poleceniami. Możemy mieć obowiązek udzielania
                  informacji zebranych przez serwis upoważnionym organom na podstawie obowiązujących przepisów.
               </p>
            </div>
            <div className={style.textWraper}>
               <h3 className={style.sub}>Twoje prawa związane z przetwarzaniem danych osobowych</h3>
               <p className={style.text}>
                  Masz następujące prawa:
                  <ul>
                     <li>wniesienia sprzeciwu wobec przetwarzania Twoich danych ze względu na szczególną sytuację,</li>
                     <li>dostępu do Twoich danych osobowych,</li>
                     <li>żądania sprostowania Twoich danych osobowych,</li>
                     <li>żądania usunięcia Twoich danych osobowych,</li>
                     <li>żądania ograniczenia przetwarzania Twoich danych osobowych.</li>
                  </ul>
                  <br />
                  Aby skorzystać z powyższych praw, skontaktuj się z nami. Przysługuje Ci także prawo wniesienia skargi
                  do organu nadzorczego zajmującego się ochroną danych osobowych, tj. Prezesa Urzędu Ochrony Danych
                  Osobowych.
               </p>
            </div>
            <div className={style.textWraper}>
               <h3 className={style.sub}>Pliki cookies</h3>
               <p className={style.text}>
                  Strona turkusowawieza.pl korzysta z plików cookies. Pliki cookies stanowią dane informatyczne, w
                  szczególności pliki tekstowe, które przechowywane są w urządzeniu końcowym Użytkownika Serwisu i
                  przeznaczone są do korzystania ze stron internetowych turkusowawieza.pl. Cookies zazwyczaj zawierają
                  nazwę strony internetowej, z której pochodzą, czas przechowywania ich na urządzeniu końcowym oraz
                  unikalny numer. Podmiotem zamieszczającym na urządzeniu końcowym osoby odwiedzającej pliki cookies
                  oraz uzyskującym do nich dostęp jest operator hostingowy..
               </p>
            </div>
            <div className={style.textWraper}>
               <h3 className={style.sub}>Pliki cookies cele</h3>
               <p className={style.text}>
                  <ul>
                     <li>
                        tworzenia statystyk, które pomagają zrozumieć, w jaki sposób korzystasz ze strony internetowej
                     </li>
                     <li>utrzymanie Twojej sesji,</li>
                     <li>
                        określania Twojego profilu w celu wyświetlania mu dopasowanych materiałów w sieciach
                        reklamowych.
                     </li>
                  </ul>
                  <br />
                  Stosowane są dwa zasadnicze rodzaje plików cookies: „sesyjne” (session cookies) oraz „stałe”
                  (persistent cookies). Cookies „sesyjne” są plikami tymczasowymi, które przechowywane są w urządzeniu
                  końcowym Użytkownika do czasu wylogowania, opuszczenia strony internetowej lub wyłączenia
                  oprogramowania (przeglądarki internetowej). „Stałe” pliki cookies przechowywane są w urządzeniu
                  końcowym Użytkownika przez czas określony w parametrach plików cookies lub do czasu ich usunięcia
                  przez Użytkownika. Oprogramowanie do przeglądania stron internetowych (przeglądarka internetowa)
                  zazwyczaj domyślnie dopuszcza przechowywanie plików cookies w urządzeniu końcowym Użytkownika.
                  Użytkownicy mogą dokonać zmiany ustawień w tym zakresie – dział Ustawienia – sekcja Prywatność.
                  Przeglądarka internetowa umożliwia usunięcie plików cookies. Możliwe jest także automatyczne
                  blokowanie plików cookies Szczegółowe informacje na ten temat zawiera pomoc lub dokumentacja
                  przeglądarki internetowej. Ograniczenia stosowania plików cookies mogą wpłynąć na niektóre
                  funkcjonalności dostępne na stronach internetowych turkusowawieza.pl. Pliki cookies zamieszczane w
                  urządzeniu końcowym Użytkownika turkusowawieza.pl mogą być wykorzystywane również przez
                  współpracujących z operatorem reklamodawców, partnerów oraz przez zewnętrzne programy instalowane w
                  postaci tzw. wtyczek – np. wtyczki społecznościowe serwisu Facebook.com lub innych. Pliki cookie mogą
                  być wykorzystane przez sieci reklamowe, w szczególności sieć Google, do wyświetlenia reklam
                  dopasowanych do sposobu, w jaki użytkownik korzysta z Serwisu. W tym celu mogą zachować informację o
                  ścieżce nawigacji użytkownika lub czasie pozostawania na danej stronie.
               </p>
            </div>
            <div className={style.textWraper}>
               <h3 className={style.sub}>Logi serwera</h3>
               <p className={style.text}>
                  <ol>
                     <li>
                        Informacje o niektórych zachowaniach użytkowników podlegają logowaniu w warstwie serwerowej.
                        Dane te są wykorzystywane w celu administrowania serwisem oraz w celu zapewnienia jak
                        najbardziej sprawnej obsługi świadczonych usług hostingowych.
                     </li>
                     <li>
                        Przeglądane zasoby identyfikowane są poprzez adresy URL. Ponadto zapisowi mogą podlegać:
                        <ol className={style.listIn}>
                           <li>czas nadejścia zapytania,</li>
                           <li>czas wysłania odpowiedzi,</li>
                           <li>nazwę stacji klienta – identyfikacja realizowana przez protokół HTTP,</li>
                           <li>informacje o błędach jakie nastąpiły przy realizacji transakcji HTTP,</li>
                           <li>
                              adres URL strony poprzednio odwiedzanej przez użytkownika (referer link) – w przypadku,
                              gdy przejście do Serwisu nastąpiło przez odnośnik,
                           </li>
                           <li>informacje o przeglądarce użytkownika,</li>
                           <li>Informacje o adresie IP.</li>
                        </ol>
                     </li>
                     <li>Dane powyższe nie są kojarzone z konkretnymi osobami przeglądającymi strony.</li>
                     <li>Dane powyższe nie są wykorzystywane jedynie dla celów administrowania serwerem.</li>
                     <li>
                        Zebrane logi są przechowywane przez czas określony – 3 miesiące i służą jako materiał pomocniczy
                        wykorzystywany do administrowania serwisem. Informacje w nich zawarte nie są ujawniane nikomu
                        poza osobami upoważnionymi do Administrowania serwerem.
                     </li>
                  </ol>
               </p>
            </div>
            <div className={style.textWraper}>
               <h3 className={style.sub}>Zarządzanie plikami cookies</h3>
               <p className={style.text}>
                  Jeśli użytkownik nie chce otrzymywać plików cookies, może zmienić ustawienia przeglądarki.
                  Zastrzegamy, że wyłączenie obsługi plików cookies niezbędnych dla procesów uwierzytelniania,
                  bezpieczeństwa, utrzymania preferencji użytkownika może utrudnić, a w skrajnych przypadkach może
                  uniemożliwić korzystanie ze stron www.
               </p>
            </div>
         </div>
         <Footer />
      </>
   );
}
export default Polityka;
