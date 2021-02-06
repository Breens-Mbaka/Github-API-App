export class User {
    constructor(
        public avatar:string,
        public name:string,
        public description:string,
        public profile:string,
        public username:string,
        public location: string,
        public profileUrl: string,
        public memberSince: string,
        public followers: number,
        public repos: number,
        public following: number
    ){
    }
}
