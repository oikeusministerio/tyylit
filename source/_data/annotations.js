var comments = {
"comments" : [
	{
		"el": "header[role=banner]",
		"title" : "Masthead",
		"comment": "The main header of the site doesn't take up too much screen real estate in order to keep the focus on the core content. It's using a linear CSS gradient instead of a background image to give greater design flexibility and reduce HTTP requests."
	},
	{
		"el": ".logo",
		"title" : "Logo",
		"comment": "Vie palvelun etusivulle. SVG tai muu vektorikuva 48 px koossa.</p>"
	},
	{
		"el": "#atoms-colors",
		"title" : "Värit – Colors",
		"comment": "Palvelut käyttävät samaa värisarjaa. Kullekin palvelulle on valittu oma heräteväri. Värejä suunniteltaessa on huomioitava <a href=\"http://www.w3.org/Translations/WCAG20-fi/\" target=\"_blank\">WCAG 2.0</a> kontrasti- luminanssi- ja fonttivaatimukset.</p><p>Huomiovärillä merkitään käyttäjätarinan mukaan seuraava painike jota käyttäjän odotetaan pääkäyttötapauksen mukaan painavan. Vaihtoehtoisten käyttötapausten painikkeet ovat tummanharmaat. Painikkeita joita ei pääse käyttämään, ei piiloteta vaan ne näytetään vaaleammalla harmaalla.</p>Services all use same colorspace. There is a primary attention color for each service, that also serves as the brand color in the logo. Colors have their luminance according to WCAG20 accessibility requirements."
	},
	{
		"el": "#atoms-buttons",
		"title" : "Painikkeet – Buttons",
		"comment": "Painikkeet ovat kulmastaan yhden pikselin verran pyöristettyjä suorakulmioita. Kaikissa painikkeissa suositellaan käyttämään selventäviä ikoneita tekstiotsikon lisäksi.
					</p>
					<p>Luodaan classilla, voi olla a-, input- tai button-tageilla.</p>

					<h4>Painikkeiden ikonit</h4>
					<p>Painikkeissa ikoni laitetaan painikkeen tekstin edelle tekstin värisenä.</p>

					<h4>Painikkeiden tilat</h4>

					<p>Painikkeen käytön voi estää lisäämällä painikkeen luokkaan <span style=\"red\">disabled</span>.</p>

					"
	},
	{
		"el": "#atoms-button-groups",
		"title" : "Painikkeet – Button Groups",
		"comment": "Voit liittää yksittäisiä painikkeita toisiinsa jolloin niiden reunat ja välit muotoutuvat ryhmittymän mukaan tyylikkäästi.
					</p>
					<p>Painikeryhmien painikkeet luodaan samoin kuin yksittäiset painikkeet, a-, input- tai button-tageilla. Ryhmän muodostaa painikkeiden ympäröivä div-tagin btn-group-luokka.</p>
					


					<p>Jos haluat lisätä painikeryhmään tarkennuksen, esimerkiksi numeron, lisää a-tagin sisään span-tagi ja laita sen luokaksi <span style=\"red\">count</span>.</p>

					<p>Käytä <span style=\"red\">sorting</span>-luokkaa halutessasi lajittelupainikeryhmän.</p>

					<h4>Painikkeiden ikonit</h4>

					<p>Painikkeisiin voidaan liittää ikoneja samoin kuin yksittäisin painikkeisiin.</p>

					"
	},
	{
		"el": "#atoms-inline-elements",
		"title" : "Linkit – Links",
		"comment": "Linkkien väri on sininen kautta palveluiden. Se tarjoaa paremman kontrastin kuin korostusväri eikä ole sidottu yhteen palveluun. Lisäksi linkit ovat alleviivaamattomia, myös aktiivisina.
					</p>
					<p></p>"
	},
	{
		"el": "#atoms-inline-elements",
		"title" : "Lomakkeet – Forms",
		"comment": "Lomakkeissa käytettävät komponentit toteutetaan HTML:n perustageja <span style=\"red\">&gt;input&lt;</span>, <span style=\"red\">&gt;select&lt;</span> ja <span style=\"red\">&gt;textarea&lt;</span> käyttäen.
					</p>
					<h4>Tekstikentät – Text Fields</h4>
					<p>Perustekstiken otsikon saat lisättyä &gt;label&lt-tagin avulla. Muista paketoida jokainen lomake-elementti &gt;div&lt-tagilla, johon on lisätty form-element&lt-luokka.</p>

					<h4>Lomake-elementtien tilat – Form elements' states</h4>
					<p>Voit säädellä lomake-elementtien tiloja HTML:n peruskomennoilla sekä luokilla. Alta löydät monia eri tapoja kontrolloida lomake-elementtejä.</p>
					"
	},
	{
		"el": "#atoms-fadeout-text",
		"title" : "Häivytys – Fader",
		"comment": "Häivytystä käytetään pitkien tekstien katkaisemiseen, jolloin käyttäjä halutessaan lukea pidemmälle voi linkkiä klikkaamalla nähdä tekstistä loput.
					</p>
					<h4>Kokovaihtoehdot</h4>
					<p>Häivytettä alue on oletuksena 100 pikseliä korkea, mutta käytössäsi on myös kaksi muuta valmista kokoa, <span style=\"red\">smaller</span> ja <span style=\"red\">tiny</span>.</p>
					"
	},
	{
		"el": "#atoms-fadeout-text",
		"title" : "Häivytys – Fader",
		"comment": "Häivytystä käytetään pitkien tekstien katkaisemiseen, jolloin käyttäjä halutessaan lukea pidemmälle voi linkkiä klikkaamalla nähdä tekstistä loput.
					</p>
					<h4>Kokovaihtoehdot</h4>
					<p>Häivytettä alue on oletuksena 100 pikseliä korkea, mutta käytössäsi on myös kaksi muuta valmista kokoa, <span style=\"red\">smaller</span> ja <span style=\"red\">tiny</span>.</p>
					"
	},
	{
		"el": "#organisms-header",
		"title" : "JavaScriptitön toiminta – Functionality without JavaScript",
		"comment": "Ylätunniste on erilainen selaimissa, joissa javascript ei ole käytössä. Sisäänkirjautumiselementti 2 on piilotettu. Kirjautumis-, salasana unohtunut- ja rekisteröintiosiot näkyvät allekkain edellä mainitussa järjestyksessä. Missään edellä mainitussa osiossa ei ole facebook-käyttöön liittyviä tekstejä tai käyttöliittymäkomponentteja. Jokaiseen lohkoon voidaan linkittää ankkurilinkeillä:
			<ul>
				<li>url#kirjaudu tai ruotsinkielisellä sivustolla #loggain</li>
				<li>url#kirjaudu tai ruotsinkielisellä sivustolla #loggain</li>
				<li>url#rekisteroidy tai ruotsinkielisellä sivustolla #registrera</li>
			</ul>
			</p>
			<p>Jos taustajärjestelmä tunnistaa javascriptin puutteen, voidaan myös näyttää käyttäjälle avoimen lomakkeen sijaan linkki vaihtoehtoiselle sivulle.</p>
			<p>Käyttäjätarina 1: Käyttäjänä, jolla javascript on estetty selaimessa, näen kirjautumis-, salasana unohtunut- ja rekisteröintiosion allekkain otakantaa-sivuston yläosassa. En näe Facebook-kirjautumiseen liittyviä tekstejä tai käyttöliittymäkomponentteja.</p>
			<p>Käyttäjätarina 2: Käyttäjänä, jolla javascript on estetty selaimessa, voin kirjautua tai rekisteröityä palveluun.</p>
			<p>Käyttäjätarina 3: Käyttäjänä, jolla javascript on estetty selaimessa ja joka on ennestään rekisteröitynyt, voin vaihtaa käyttäjätilini salasanan.</p>

		"
	},





	{
		"el": "#nav",
		"title" : "Navigation",
		"comment": "<p>Navigation for adaptive web experiences can be tricky. Top navigations are typical on desktop sites, but mobile screen sizes don't give us the luxury of space. We're dealing with this situation by creating a simple menu anchor that toggles the main navigation on small screens. This is just one method. <a href=\"http://bagcheck.com/\">Bagcheck</a> and <a href=\"http://contentsmagazine.com/\">Contents Magazine</a> add an anchor in the header that jumps users to the navigation which is placed in the footer. This solution works well because it doesn't require any Javascript in order to work. Other methods exist too. For example, <a href=\"http://m.espn.com\">ESPN's mobile navigation</a> overlays the main content of the page.</p><p>The nav is only hidden when a certain level of javascript is supported in order to ensure that users with little/poor javascript support can still access the navigation. Once the screen size is large enough to accommodate the nav, we show the main navigation links and hide the menu anchor.<p><p>See also: <a href=\"http://bradfrostweb.com/blog/web/responsive-nav-patterns/\">Responsive Navigation Patterns</a></p>"
	},
	{
		"el": ".search-form",
		"title" : "Search",
		"comment": "Vain valittavissa oleva kieli näyytetään. Teksti valittavalla kielellä.</p>"
	},
	{
		"el": ".article-header h1",
		"title" : "Article Header",
		"comment": "<p>The article header should be no more than 140 characters. </p>"
	},
	{
		"el": "#atoms-buttons",
		"title" : "Painikkeet",
		"comment": "<p>Luodaan classilla, voi olla a-, input- tai button-tageilla.</p>"
	},
	{
		"el": "#atoms-ingressi",
		"title": "Ingressi",
		"comment": "<p>Luodaan classilla 'ingressi'. Käytetään kontekstin eli asiayhteyden ilmaisemiseen sekä hyötyjen viestimiseen. Tähän kirjoitetaan se teksti mitä oletetaan valveutuneen käyttäjän tietävän ja tuntevan lukemattakin.</p>"
	}
]
};
