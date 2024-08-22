Browser("Agencia Nacional Transito").Page("Agencia Nacional Transito").WebButton("Pagar en Agencia").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Agencia Nacional Transito").Page("Agencia Nacional Transito_2").WebList("provincia").Select DataTable("PROVINCIA", dtGlobalSheet) @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Agencia Nacional Transito").Page("Agencia Nacional Transito_2").WebList("canton").Select DataTable("CANTON", dtGlobalSheet) @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Agencia Nacional Transito").Page("Agencia Nacional Transito_2").WebList("agencia").Select "Servipagos" @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Agencia Nacional Transito").Page("Agencia Nacional Transito_2").WebButton("PAGAR").Click @@ script infofile_;_ZIP::ssf5.xml_;_
