(function(angular, undefined) {
  angular.module("authCellApp.constants", [])

.constant("appConfig", {
	"userRoles": [
		"guest",
		"user",
		"admin",
		"org"
	],
	"subjects": {
		"telugu": [
			{
				"topicname": "Arithmetic",
				"displaytext": "అర్థమెటిక్ ప్రాక్టీస్ టెస్ట్",
				"isInProd": true,
				"chapters": [
					{
						"url": "averages-TEL",
						"displaytext": "సరాసరి"
					},
					{
						"url": "lcmgcd-TEL",
						"displaytext": "క.సా.గు-గ.సా.భా"
					},
					{
						"url": "numseries-TEL",
						"displaytext": "నంబర్ సిరీస్"
					},
					{
						"url": "numsys-TEL",
						"displaytext": "నంబర్ సిస్టం"
					},
					{
						"url": "patnership-TEL",
						"displaytext": "భాగస్వామ్యం"
					},
					{
						"url": "percent-TEL",
						"displaytext": "శాతాలు"
					},
					{
						"url": "5b7b058e07c0b10004f08722",
						"displaytext": "లాభనష్టాలు"
					}
				]
			},
			{
				"topicname": "Reasoning",
				"displaytext": "రీజనింగ్",
				"isInProd": false,
				"chapters": [
					{
						"url": "RK-seatingarrange-TEL",
						"displaytext": "సీటింగ్ అరేంజ్ మెంట్"
					},
					{
						"url": "RK-series-TEL",
						"displaytext": "సంఖ్యా శ్రేణి"
					},
					{
						"url": "RK-ranking-TEL",
						"displaytext": "ర్యాంకింగ్ పరీక్షఎడిషన్"
					},
					{
						"url": "RK-puzzle-TEL",
						"displaytext": "పజిల్ టెస్ట్"
					},
					{
						"url": "RK-direction-TEL",
						"displaytext": "దిక్కులు"
					},
					{
						"url": "RK-dies-TEL",
						"displaytext": "పాచికలు"
					},
					{
						"url": "RK-codingdecoding-TEL",
						"displaytext": "కోడింగ్ -  డీకోడింగ్"
					},
					{
						"url": "RK-blodrelation-TEL",
						"displaytext": "రక్త సంబంధాలు"
					},
					{
						"url": "RK-plika-TEL",
						"displaytext": "పోలిక పరీక్ష"
					},
					{
						"url": "RK-vendiagroms-TEL",
						"displaytext": "వెన్ డయాగ్రమ్స్"
					},
					{
						"url": "RK-statementconclusion-TEL",
						"displaytext": "ప్రకటనలు - తీర్మానాలు"
					}
				]
			},
			{
				"topicname": "RK Mocktest",
				"displaytext": "RK Content",
				"isInProd": false,
				"chapters": [
					{
						"url": "RK-Time-Work-TEL",
						"displaytext": "RK-Time-Work-TEL"
					},
					{
						"url": "RK-Profit-Loss-TEL",
						"displaytext": "RK-Profit-Loss-TEL"
					},
					{
						"url": "RK-Time-Distance-TEL",
						"displaytext": "RK-Time-Distance-TEL"
					}
				]
			},
			{
				"topicname": "General Knowledge",
				"isInProd": true,
				"displaytext": "జనరల్ నాలెడ్జ్ ప్రాక్టీస్ టెస్ట్",
				"chapters": [
					{
						"url": "indiaarea-TEL",
						"displaytext": "భారతదేశం ఉనికి విస్తరణ"
					},
					{
						"url": "indianpopulation-TEL",
						"displaytext": "భారతదేశ జనాభా లెక్కలు"
					},
					{
						"url": "indianstateinfo-TEL",
						"displaytext": "రాష్ట్రాలు, కేంద్రపాలిత ప్రాంతాలు, ఆంధ్రప్రదేశ్ జిల్లా సమాచారం"
					},
					{
						"url": "importcontryinfo-TEL",
						"displaytext": "ముఖ్య దేశాల సమాచారం"
					},
					{
						"url": "countrycap-TEL",
						"displaytext": "దేశాలు-రాజధానులు, కరెన్సీ, పాత పేర్లు-కొత్త పేర్లు"
					},
					{
						"url": "nationalsym-TEL",
						"displaytext": "జాతీయ చిహ్నాలు"
					},
					{
						"url": "indianlongest-TEL",
						"displaytext": "భారతదేశంలో ఎత్తైనవి పొడవైనవి"
					},
					{
						"url": "firstinindia-TEL",
						"displaytext": "భారతదేశంలో ప్రప్రధములు"
					},
					{
						"url": "firstinworld-TEL",
						"displaytext": "ప్రపంచంలో ప్రప్రథమలు"
					},
					{
						"url": "awards-TEL",
						"displaytext": "అవార్డులు"
					},
					{
						"url": "unitednation-TEL",
						"displaytext": "ఐక్యరాజ్యసమితి"
					},
					{
						"url": "unitednationsubsys-TEL",
						"displaytext": "ఐక్యరాజ్యసమితి అనుబంధ సంస్థలు, అంతర్జాతీయ కూటములు, సమాఖ్యలు"
					},
					{
						"url": "spacesys-TEL",
						"displaytext": "అంతరిక్ష రంగం, రక్షణ రంగం"
					},
					{
						"url": "games-TEL",
						"displaytext": "క్రీడారంగం"
					},
					{
						"url": "indiantranspotsys-TEL",
						"displaytext": "భారత రవాణా వ్యవస్థ"
					},
					{
						"url": "indianinfosys-TEL",
						"displaytext": "భారత సమాచార వ్యవస్థ"
					},
					{
						"url": "inventeddivices-TEL",
						"displaytext": "పరికరాలు కొనుక్కున్న శాస్త్రవేత్తలు వాటి ఉపయోగం"
					},
					{
						"url": "diffsciences-TEL",
						"displaytext": "వివిధ అధ్యయన శాస్త్రాలు"
					},
					{
						"url": "placesndpetname-TEL",
						"displaytext": "ప్రదేశాలు, పర్యాయపదాలు, వ్యక్తులు బిరుదులు"
					},
					{
						"url": "operations-TEL",
						"displaytext": "ముఖ్యమైన దినోత్సవాలు, ఆపరేషన్లు, కమిటీలు"
					},
					{
						"url": "slogans-TEL",
						"displaytext": "ప్రముఖ వ్యక్తుల పలుకులు ఆత్మకథలు గ్రంథలు రచయితలు"
					},
					{
						"url": "historicbooks-TEL",
						"displaytext": "చరిత్ర గ్రంథాలు,  వివిధ మతాలు, గిరిజన జాతులు, కుటీర పరిశ్రమలు"
					},
					{
						"url": "parlamentnames-TEL",
						"displaytext": "దేశాలు,  పార్లమెంట్ పేర్లు,   నదీతీర నగరాలు, సమాధులు"
					},
					{
						"url": "localdance-TEL",
						"displaytext": "వివిధ సామాజిక మత సంస్కరణ ఉద్యమాలు, జానపద నృత్యాలు,  కళాకారులు"
					},
					{
						"url": "plannet-TEL",
						"displaytext": "గ్రహాలు కొన్ని ముఖ్యాంశాలు, చక్రవాతాలు,  గడ్డి భూములు, అంతర్జాతీయ సరిహద్దులు,  ప్రముఖులు వేతనాలు, ప్రోటోకాల్,  రాజకీయ పార్టీలు-గుర్తులు"
					},
					{
						"url": "fobio-TEL",
						"displaytext": "వివిధ రకాల మిశ్రమ లోహాలు, మూడు  ఖనిజాలు, పరిశోధన సంస్థలు, ఫోబియాలు"
					},
					{
						"url": "hills-TEL",
						"displaytext": "ఎవరెస్టు శిఖరం, సినిమా రంగం, న్యూ వండర్స్,  కట్టడాలు, డిజైన్ కథలు,  ప్రభుత్వ భవనాలు  మారుపేర్లు, వివిధ దేశాల  అధికార నివాసాలు,  అధికార పుస్తకాలు"
					},
					{
						"url": "impcities-TEL",
						"displaytext": "ప్రపంచంలో మరియు భారతదేశంలో ముఖ్యమైన నగరాలు ప్రాముఖ్యతలు"
					},
					{
						"url": "historicplaces-TEL",
						"displaytext": "భారతదేశం ముఖ్యమైన నిర్మాణాలు-స్మారక చిహ్నాలు- ప్రాచీనమైన ప్రాంతాలు"
					},
					{
						"url": "abbr-TEL",
						"displaytext": "అబ్రివేషన్"
					}
				]
			},
			{
				"topicname": "Inidan Economy",
				"displaytext": "ఇండియన్ ఎకానమీ",
				"isInProd": true,
				"chapters": [
					{
						"url": "indianplanning-TEL",
						"displaytext": "భారత ప్రణాళికలు"
					},
					{
						"url": "indianpoverty-TEL",
						"displaytext": "పేదరికం"
					},
					{
						"url": "indiannationalincom-TEL",
						"displaytext": "జాతీయ ఆదాయం"
					},
					{
						"url": "indianeconsys-TEL",
						"displaytext": "ప్రభుత్వ విత్తం"
					},
					{
						"url": "indianmoney-TEL",
						"displaytext": "ద్రవ్యం"
					},
					{
						"url": "indianbanking-TEL",
						"displaytext": "బ్యాంకింగ్ రంగం"
					},
					{
						"url": "indianaggri-TEL",
						"displaytext": "వ్యవసాయ రంగం"
					},
					{
						"url": "indianindust-TEL",
						"displaytext": "పారిశ్రామిక రంగం"
					},
					{
						"url": "indianstock-TEL",
						"displaytext": "అంతర్జాతీయ వ్యాపారం-  సంస్థలు - స్టాక్ మార్కెట్లు"
					},
					{
						"url": "indianbudget-TEL",
						"displaytext": "బడ్జెట్"
					},
					{
						"url": "indianecodev-TEL",
						"displaytext": "ఆర్థిక వృద్ధి-  ఆర్థికావృద్ధి"
					},
					{
						"url": "indianesocialsch-TEL",
						"displaytext": "భారతదేశం- ఆంధ్ర ప్రదేశ్ సంక్షేమ పథకాలు"
					}
				]
			},
			{
				"topicname": "Indian Polytics",
				"displaytext": "ఇండియన్ పాలిటిక్స్",
				"isInProd": true,
				"chapters": [
					{
						"url": "indianconsthist-TEL",
						"displaytext": "భారత రాజ్యాంగం చారిత్రక నేపథ్యం - బ్రిటిష్ వారు చేసిన చట్టాలు"
					},
					{
						"url": "indianconstwrit-TEL",
						"displaytext": "భారత రాజ్యాంగం పరిచయం - రచన"
					},
					{
						"url": "indianforeigncontimp-TEL",
						"displaytext": "వివిధ దేశాలు రాజ్యాంగాల  నుండి  స్వీకరించిన  ముఖ్యమైన అంశాలు"
					},
					{
						"url": "prevesika-TEL",
						"displaytext": "ప్రవేశిక/పీఠిక"
					},
					{
						"url": "indianconstsymptoms-TEL",
						"displaytext": "భారత రాజ్యాంగ లక్షణాలు"
					},
					{
						"url": "centeralgov-TEL",
						"displaytext": "కేంద్ర ప్రభుత్వం"
					},
					{
						"url": "stategov-TEL",
						"displaytext": "రాష్ట్ర ప్రభుత్వం"
					},
					{
						"url": "localinst-TEL",
						"displaytext": "స్థానిక సంస్థలు"
					},
					{
						"url": "indianconstparts-TEL",
						"displaytext": "భారత రాజ్యాంగంలోని అధి కారణలు మరియు భాగాలు"
					},
					{
						"url": "indianconstchanges-TEL",
						"displaytext": "రాజ్యాంగ సవరణలు"
					}
				]
			}
		],
		"english": [
			{
				"topicname": "Arithmetic",
				"displaytext": "Arithmetic",
				"isInProd": true,
				"chapters": [
					{
						"url": "averages-EN",
						"displaytext": "Averages"
					},
					{
						"url": "calender-EN",
						"displaytext": "Calender"
					},
					{
						"url": "clocks-EN",
						"displaytext": "Clocks"
					},
					{
						"url": "interests-EN",
						"displaytext": "Simple Interest and Compond Interest"
					},
					{
						"url": "lcmgcd-EN",
						"displaytext": "LCM and GCD"
					},
					{
						"url": "timework-EN",
						"displaytext": "Time and Distance"
					}
				]
			}
		]
	}
})

;
})(angular);