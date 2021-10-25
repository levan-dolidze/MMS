export class distributorRegistracionModel {
    id?: string;
    name: string;
    lastname: string;
    date: string;
    gender: boolean;
    identificationDoc: boolean;
    identificationDocSeries: string;
    identificationDocNumber: string;
    dateOfIssue: string;
    dateOfExpiry: string;
    IDnumber: string;
    phone: string;
    mobile: string;
    email: string;
    fax: string;
    issuingAuthority: string;
    contactInfo: string;
    addressType: string;
    address: string;
    hasRecommender: boolean;
    recomendatorPersonalNo: string;
    protegePersonalNo: Array<string | number>;
    fotoUpload: string;

    constructor(id: string, name: string, lastname: string, date: string, gender: boolean, identificationDoc: boolean, identificationDocSeries: string, identificationDocNumber: string, dateOfIssue: string, dateOfExpiry: string, IDnumber: string, phone: string, mobile: string, email: string, fax: string, issuingAuthority: string, contactInfo: string,
        addressType: string, address: string, hasRecommender: boolean, recomendatorPersonalNo: string, protegePersonalNo: Array<string | number>, fotoUpload: string) {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.date = date;
        this.gender = gender;
        this.identificationDoc = identificationDoc;
        this.identificationDocSeries = identificationDocSeries;
        this.identificationDocNumber = identificationDocNumber;
        this.dateOfIssue = dateOfIssue;
        this.dateOfExpiry = dateOfExpiry;
        this.IDnumber = IDnumber;
        this.phone = phone;
        this.mobile = mobile;
        this.email = email;
        this.fax = fax;
        this.issuingAuthority = issuingAuthority;
        this.contactInfo = contactInfo;
        this.addressType = addressType;
        this.address = address;
        this.hasRecommender = hasRecommender;
        this.recomendatorPersonalNo = recomendatorPersonalNo;
        this.protegePersonalNo = protegePersonalNo;
        this.fotoUpload = fotoUpload;

    };
};