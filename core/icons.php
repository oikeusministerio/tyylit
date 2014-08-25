<?php
	echo "Generating icon classes and sass declarations... \n";
	
	$handle = file_get_contents('../source/fonts/selection.json');
	//$handle   = fopen("../source/fonts/glyphnames.csv", "r"); 
	
	$mustache = fopen("../source/_patterns/00-atoms/04-images/05-icons.mustache", "w+");
	$sass     = fopen("../source/css/scss/objects/_generated-icons.scss", "w+");
	
	$row = 1;
	if ( $handle !== FALSE && $mustache !== FALSE && $sass !== FALSE ) {
		fwrite($mustache, "<!-- GENERATED IN ICONS.PHP -->\n");
		
		fwrite($mustache, "<h3>Iconit</h3>\n");
		fwrite($mustache, "<ul class='icons'>\n");
		
		fwrite($mustache, "\t<li> <i class='icon-search'></i></li>\n");
		fwrite($mustache, "\t<li> <i class='icon-play'></i></li>\n");
		fwrite($mustache, "\t<li> <i class='icon-ok'></i></li>\n");
		fwrite($mustache, "\t<li> <i class='icon-notify'></i></li>\n");
		fwrite($mustache, "\t<li> <i class='icon-warning'></i></li>\n");
		fwrite($mustache, "\t<li> <i class='icon-close'></i></li>\n");
		fwrite($mustache, "\t<li> <i class='icon-add'></i></li>\n");
		fwrite($mustache, "\t<li> <i class='icon-delete'></i></li>\n");
		fwrite($mustache, "\t<li> <i class='icon-tip'></i></li>\n\n");
		
		
		fwrite($sass, "/******  GENERATED IN ICONS.PHP ******/\n\n");
		fwrite($sass, "/****** Democracy glyphs ******/ \n");
		fwrite($sass, "/* Naming convention from https://github.com/Oikeusministerio/tyylit/blob/master/source/fonts/glyphnames.csv */ \n");
		fwrite($sass, "/* Few alias has been left those has been already implemented in the code */ \n\n");

		
		
		$json = json_decode($handle, true);
		$icons = $json['icons'];
		foreach ($icons as $icon) {
			
			fwrite($mustache,"\t<li> <i class='".$icon['properties']['name']."'></i>".$icon['properties']['name']."</li>\n");
			fwrite($sass, ".".$icon['properties']['name'].":before {\n");
			fwrite($sass, "\tcontent: \"\\".dechex( intval( $icon['properties']['code'], 10) )."\";\n");
			fwrite($sass, "\t@extend .om;\n");
			fwrite($sass, "}\n\n");
			fwrite($sass, ".icon-".$icon['properties']['name'].":before {\n");
			fwrite($sass, "\tcontent: \"\\".dechex( intval( $icon['properties']['code'], 10) )."\";\n");
			fwrite($sass, "\t@extend .om;\n");
			fwrite($sass, "}\n\n");
		}
		fwrite($mustache, "</ul>\n\n");
		fwrite($mustache, "<h4>Esimerkki iconien eri koista</h4>\n");
		fwrite($mustache, "<ul class='icons icons-compare'>\n");
		fwrite($mustache, "\t<li><i class='icon-ok size-s'></i>Pieni iconi</li>\n");
		fwrite($mustache, "\t<li><i class='icon-ok'></i>Normaali iconi</li>\n");
		fwrite($mustache, "\t<li><i class='icon-ok size-l'></i>Suuri iconi</li>\n");
		fwrite($mustache, "\t<li><i class='icon-ok size-xl'></i>Erittäin suuri iconi</li>\n");
		fwrite($mustache, "</ul>\n");
		
		echo "Done!\n";
	} else {
		echo "failed to load csv file";
	}
	fclose($mustache);
	fclose($sass);
?>