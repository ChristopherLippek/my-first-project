

export class Artist {

        name: string;
        listner: string;
        picture: string;
 

        setAll(name: string, listner: string, picture: string){
            this.name = name;
            this.listner = listner;
            this.picture = picture;
        }

        getName(){
            return this.name;
        }

        getListner(){
            return this.listner;
        }

        getPicture(){
            return this.picture;
        }
}
