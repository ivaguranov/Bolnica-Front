export const getTableHeaders = (contentType) => {
	if (contentType === "employeePreview") {
		return [
			{
				key: "name",
				value: "Ime",
			},
			{
				key: "surname",
				value: "Prezime",
			},
			{
				key: "lbz",
				value: "LBZ",
			},
			{
				key: "contact",
				value: "Kontakt",
			},
			{
				key: "email",
				value: "Email",
			},
			{
				key: "title",
				value: "Titula",
			},
			{
				key: "profession",
				value: "Zanimanje",
			},
			{
				key: "department",
				value: "Odeljenje",
			},
		];
	} else if (contentType === "patientPreview") {
		return [
			{
				key: "ime",
				value: "Ime",
			},
			{
				key: "prezime",
				value: "Prezime",
			},
			{
				key: "kontaktTelefon",
				value: "Kontakt",
			},
			{
				key: "email",
				value: "Email",
			},
			{
				key: "zanimanje",
				value: "Zanimanje",
			},
			{
				key: "lbp",
				value: "LBP",
			},
		];
	} else if (contentType === "examinationHistory") {
		return [
			{
				key: "datum",
				value: "Datum",
			},
			{
				key: "objektivniNalaz",
				value: "Objektivni nalaz",
			},
		];
	} else if (contentType === "diseaseHistory") {
		return [
			{
				key: "dijagnoza",
				value: "Dijagnoza",
			},
			{
				key: "pocetak",
				value: "Pocetak",
			},
			{
				key: "zavrsetak",
				value: "Zavrsetak",
			},
			{
				key: "rezultatLecenja",
				value: "Rezultat lecenja",
			},
			{
				key: "tekuceStanje",
				value: "Tekuce stanje",
			},
			{
				key: "validanOd",
				value: "Validan od",
			},
			{
				key: "validanDo",
				value: "Validan do",
			},
		];
	}
	return [];
};
