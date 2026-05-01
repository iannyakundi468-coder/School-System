export interface PortfolioItem {
    id: string;
    title: string;
    student: string;
    date: string;
    type: 'image' | 'pdf';
    url: string;
    area: string;
    tags: string[];
    description?: string;
    likes: number;
}
