type Article = {
    title: string;
    content: string; // Markdown
    category: {
        id: number;
        name: string;
        description: string;
    };
    id: number;
};

