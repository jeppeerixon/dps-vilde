export class QuizQuestion {
    constructor(
        public id: number,
        public title: string, 
        public options: [string], 
        public points: [number], 
        public done: boolean,
        public description?: string,
    ) {}
}