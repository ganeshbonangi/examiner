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
						"url": "5ce02aec4a7853347da3bc24",
						"displaytext": "సరాసరి ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "5ce02b454a7853347da3bc28",
						"displaytext": "క.సా.గు-గ.సా.భా ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "5ce02b754a7853347da3bc2b",
						"displaytext": "నంబర్ సిరీస్ ప్రాక్టీస్ టెస్ట్ with video explanation"
					},
					{
						"url": "5ce02b854a7853347da3bc2c",
						"displaytext": "నంబర్ సిస్టం ప్రాక్టీస్ టెస్ట్ with explanation"
					},
					{
						"url": "5ce02b954a7853347da3bc2d",
						"displaytext": "భాగస్వామ్యం ప్రాక్టీస్ టెస్ట్ with explanation"
					},
					{
						"url": "5ce02ba84a7853347da3bc2e",
						"displaytext": "శాతాలు ప్రాక్టీస్ టెస్ట్ with explanation"
					},
					{
						"url": "5b7b058e07c0b10004f08722",
						"displaytext": "లాభనష్టాలు ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "5b7b064b07c0b10004f08724",
						"displaytext": "కాలం-దూరం ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "5b7b066907c0b10004f08725",
						"displaytext": "కాలం-పని ప్రాక్టీస్ టెస్ట్"
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
						"displaytext": "సీటింగ్ అరేంజ్ మెంట్ ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "RK-series-TEL",
						"displaytext": "సంఖ్యా శ్రేణి ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "RK-ranking-TEL",
						"displaytext": "ర్యాంకింగ్ పరీక్షఎడిషన్ ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "RK-puzzle-TEL",
						"displaytext": "పజిల్ టెస్ట్ ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "RK-direction-TEL",
						"displaytext": "దిక్కులు ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "RK-dies-TEL",
						"displaytext": "పాచికలు ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "RK-codingdecoding-TEL",
						"displaytext": "కోడింగ్ -  డీకోడింగ్ ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "RK-blodrelation-TEL",
						"displaytext": "రక్త సంబంధాలు ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "RK-plika-TEL",
						"displaytext": "పోలిక పరీక్ష ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "RK-vendiagroms-TEL",
						"displaytext": "వెన్ డయాగ్రమ్స్ ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "RK-statementconclusion-TEL",
						"displaytext": "ప్రకటనలు - తీర్మానాలు ప్రాక్టీస్ టెస్ట్"
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
						"displaytext": "RK-Time-Work-TEL ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "RK-Profit-Loss-TEL",
						"displaytext": "RK-Profit-Loss-TEL ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "RK-Time-Distance-TEL",
						"displaytext": "RK-Time-Distance-TEL ప్రాక్టీస్ టెస్ట్"
					}
				]
			},
			{
				"topicname": "General Knowledge",
				"isInProd": true,
				"displaytext": "జనరల్ నాలెడ్జ్ ప్రాక్టీస్ టెస్ట్",
				"chapters": [
					{
						"url": "5cf192ddbaca985f05a96bac",
						"displaytext": "భారతదేశం ఉనికి విస్తరణ ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "5cf192e6baca985f05a96bad",
						"displaytext": "భారతదేశ జనాభా లెక్కలు ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "5cf192f0baca985f05a96bae",
						"displaytext": "రాష్ట్రాలు, కేంద్రపాలిత ప్రాంతాలు, ఆంధ్రప్రదేశ్ జిల్లా సమాచారం ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "5cf192f9baca985f05a96baf",
						"displaytext": "ముఖ్య దేశాల సమాచారం ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "5cf08b3cbaca985f05a96b24",
						"displaytext": "దేశాలు-రాజధానులు, కరెన్సీ, పాత పేర్లు-కొత్త పేర్లు ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "5cf1930abaca985f05a96bb0",
						"displaytext": "జాతీయ చిహ్నాలు ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "5cf19315baca985f05a96bb1",
						"displaytext": "భారతదేశంలో ఎత్తైనవి పొడవైనవి ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "5cf1931dbaca985f05a96bb2",
						"displaytext": "భారతదేశంలో ప్రప్రధములు ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "5cf19326baca985f05a96bb3",
						"displaytext": "ప్రపంచంలో ప్రప్రథమలు ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "5cf1932ebaca985f05a96bb4",
						"displaytext": "అవార్డులు ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "5cf19337baca985f05a96bb5",
						"displaytext": "ఐక్యరాజ్యసమితి ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "5cf1933fbaca985f05a96bb6",
						"displaytext": "ఐక్యరాజ్యసమితి అనుబంధ సంస్థలు, అంతర్జాతీయ కూటములు, సమాఖ్యలు ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "5cf19349baca985f05a96bb7",
						"displaytext": "అంతరిక్ష రంగం, రక్షణ రంగం ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "5cf19351baca985f05a96bb8",
						"displaytext": "క్రీడారంగం ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "5cf1935dbaca985f05a96bb9",
						"displaytext": "భారత రవాణా వ్యవస్థ ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "5cf19364baca985f05a96bba",
						"displaytext": "భారత సమాచార వ్యవస్థ ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "5cf1936ebaca985f05a96bbb",
						"displaytext": "పరికరాలు కొనుక్కున్న శాస్త్రవేత్తలు వాటి ఉపయోగం ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "5cf19377baca985f05a96bbc",
						"displaytext": "వివిధ అధ్యయన శాస్త్రాలు ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "5cf1937fbaca985f05a96bbd",
						"displaytext": "ప్రదేశాలు, పర్యాయపదాలు, వ్యక్తులు బిరుదులు ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "5cf19388baca985f05a96bbe",
						"displaytext": "ముఖ్యమైన దినోత్సవాలు, ఆపరేషన్లు, కమిటీలు ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "5cf19390baca985f05a96bbf",
						"displaytext": "ప్రముఖ వ్యక్తుల పలుకులు ఆత్మకథలు గ్రంథలు రచయితలు ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "cf19398baca985f05a96bc0",
						"displaytext": "చరిత్ర గ్రంథాలు,  వివిధ మతాలు, గిరిజన జాతులు, కుటీర పరిశ్రమలు ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "5cf193a1baca985f05a96bc1",
						"displaytext": "దేశాలు,  పార్లమెంట్ పేర్లు,   నదీతీర నగరాలు, సమాధులు ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "5cf193a9baca985f05a96bc2",
						"displaytext": "వివిధ సామాజిక మత సంస్కరణ ఉద్యమాలు, జానపద నృత్యాలు,  కళాకారులు ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "5cf193c1baca985f05a96bc3",
						"displaytext": "గ్రహాలు కొన్ని ముఖ్యాంశాలు, చక్రవాతాలు,  గడ్డి భూములు, అంతర్జాతీయ సరిహద్దులు,  ప్రముఖులు వేతనాలు, ప్రోటోకాల్,  రాజకీయ పార్టీలు-గుర్తులు ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "5cf193cabaca985f05a96bc4",
						"displaytext": "వివిధ రకాల మిశ్రమ లోహాలు, మూడు  ఖనిజాలు, పరిశోధన సంస్థలు, ఫోబియాలు ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "5cf1940fbaca985f05a96bc5",
						"displaytext": "ఎవరెస్టు శిఖరం, సినిమా రంగం, న్యూ వండర్స్,  కట్టడాలు, డిజైన్ కథలు,  ప్రభుత్వ భవనాలు  మారుపేర్లు, వివిధ దేశాల  అధికార నివాసాలు,  అధికార పుస్తకాలు ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "5cf1941dbaca985f05a96bc6",
						"displaytext": "ప్రపంచంలో మరియు భారతదేశంలో ముఖ్యమైన నగరాలు ప్రాముఖ్యతలు ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "5cf19425baca985f05a96bc7",
						"displaytext": "భారతదేశం ముఖ్యమైన నిర్మాణాలు-స్మారక చిహ్నాలు- ప్రాచీనమైన ప్రాంతాలు ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "5cf1942ebaca985f05a96bc8",
						"displaytext": "అబ్రివేషన్ ప్రాక్టీస్ టెస్ట్"
					}
				]
			},
			{
				"topicname": "Inidan Economy",
				"displaytext": "ఇండియన్ ఎకానమీ",
				"isInProd": true,
				"chapters": [
					{
						"url": "5cf1942ebaca985f05a96bc8",
						"displaytext": "భారత ప్రణాళికలు ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "5cf19449baca985f05a96bca",
						"displaytext": "పేదరికం ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "5cf19451baca985f05a96bcb",
						"displaytext": "జాతీయ ఆదాయం ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "5cf1945abaca985f05a96bcc",
						"displaytext": "ప్రభుత్వ విత్తం ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "5cf19463baca985f05a96bcd",
						"displaytext": "ద్రవ్యం ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "5cf1946cbaca985f05a96bce",
						"displaytext": "బ్యాంకింగ్ రంగం ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "5cf19475baca985f05a96bcf",
						"displaytext": "వ్యవసాయ రంగం ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "5cf1947dbaca985f05a96bd0",
						"displaytext": "పారిశ్రామిక రంగం ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "5cf19486baca985f05a96bd1",
						"displaytext": "అంతర్జాతీయ వ్యాపారం-  సంస్థలు - స్టాక్ మార్కెట్లు ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "5cf19490baca985f05a96bd2",
						"displaytext": "బడ్జెట్ ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "5cf1949cbaca985f05a96bd3",
						"displaytext": "ఆర్థిక వృద్ధి-  ఆర్థికావృద్ధి ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "5cf194a5baca985f05a96bd4",
						"displaytext": "భారతదేశం- ఆంధ్ర ప్రదేశ్ సంక్షేమ పథకాలు ప్రాక్టీస్ టెస్ట్"
					}
				]
			},
			{
				"topicname": "Indian Polytics",
				"displaytext": "ఇండియన్ పాలిటిక్స్",
				"isInProd": true,
				"chapters": [
					{
						"url": "5cf194b8baca985f05a96bd5",
						"displaytext": "భారత రాజ్యాంగం చారిత్రక నేపథ్యం - బ్రిటిష్ వారు చేసిన చట్టాలు ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "5cf194c1baca985f05a96bd6",
						"displaytext": "భారత రాజ్యాంగం పరిచయం - రచన ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "5cf194c9baca985f05a96bd7",
						"displaytext": "వివిధ దేశాలు రాజ్యాంగాల  నుండి  స్వీకరించిన  ముఖ్యమైన అంశాలు ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "5cf194d2baca985f05a96bd8",
						"displaytext": "ప్రవేశిక/పీఠిక ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "5cf194dbbaca985f05a96bd9",
						"displaytext": "భారత రాజ్యాంగ లక్షణాలు ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "5cf194e5baca985f05a96bda",
						"displaytext": "కేంద్ర ప్రభుత్వం ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "5cf194edbaca985f05a96bdb",
						"displaytext": "రాష్ట్ర ప్రభుత్వం ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "5cf194f5baca985f05a96bdc",
						"displaytext": "స్థానిక సంస్థలు ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "5cf194fdbaca985f05a96bdd",
						"displaytext": "భారత రాజ్యాంగంలోని అధి కారణలు మరియు భాగాలు ప్రాక్టీస్ టెస్ట్"
					},
					{
						"url": "5cf1950abaca985f05a96bde",
						"displaytext": "రాజ్యాంగ సవరణలు ప్రాక్టీస్ టెస్ట్"
					}
				]
			}
		],
		"english": [
			{
				"topicname": "Arithmetic",
				"displaytext": "Arithmetic practice test",
				"isInProd": true,
				"chapters": [
					{
						"url": "averages-EN",
						"displaytext": "Averages practice test"
					},
					{
						"url": "calender-EN",
						"displaytext": "Calender practice test"
					},
					{
						"url": "clocks-EN",
						"displaytext": "Clocks practice test"
					},
					{
						"url": "interests-EN",
						"displaytext": "Simple Interest and Compond Interest practice test"
					},
					{
						"url": "lcmgcd-EN",
						"displaytext": "LCM and GCD practice test"
					},
					{
						"url": "timework-EN",
						"displaytext": "Time and Distance practice test"
					}
				]
			}
		]
	}
})

;
})(angular);