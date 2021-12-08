export class OrnekModel{
    user;
    userInfoList;

    constructor(){
        this.user="Ali";
        this.userInfoList=[
            new UserInfoModel("Spor",true),
            new UserInfoModel("Kahvaltı",false),
            new UserInfoModel("Kitap Okumak",false),
            new UserInfoModel("Sinema",false)

        ]
    }
}
export class UserInfoModel{

    description;
    action;

    constructor(description: any, action: any){
        this.description=description;
        this.action=action;
    }

}