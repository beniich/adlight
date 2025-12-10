// Mock data to replace Supabase backend - Local storage based

export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[];

export interface MockUser {
    id: string;
    email: string;
    user_metadata?: Record<string, unknown>;
    created_at: string;
}

export interface MockSession {
    access_token: string;
    refresh_token: string;
    expires_at: number;
    expires_in: number;
    token_type: string;
    user: MockUser;
}

export interface UserProfile {
    id: string;
    user_id: string;
    full_name: string;
    email: string;
    avatar_url: string | null;
    company: string | null;
    phone: string | null;
    created_at: string;
    updated_at: string;
}

export interface UserDashboard {
    id: string;
    user_id: string;
    layout: Json;
    widgets: Json;
    theme: Json;
    created_at: string;
    updated_at: string;
}

export interface UserStats {
    id: string;
    user_id: string;
    total_incidents: number | null;
    ai_queries: number | null;
    workflows_count: number | null;
    digital_twins_count: number | null;
    last_active: string | null;
    created_at: string;
    updated_at: string;
}

export interface Product {
    id: string;
    name: string;
    description: string | null;
    price: number;
    category: string | null;
    image_url: string | null;
    stock: number | null;
    approved: boolean | null;
    seller_id: string | null;
    created_at: string;
    updated_at: string;
}

export interface Customer {
    id: string;
    user_id: string;
    name: string;
    email: string;
    phone: string | null;
    company: string | null;
    status: string;
    value: number | null;
    created_at: string;
    updated_at: string;
}

export interface Deal {
    id: string;
    user_id: string;
    title: string;
    value: number;
    stage: string;
    probability: number | null;
    close_date: string | null;
    contact: string | null;
    company_id: string | null;
    product_id: string | null;
    created_at: string | null;
    updated_at: string | null;
}

export interface Task {
    id: string;
    user_id: string;
    title: string;
    description: string | null;
    status: string;
    priority: string;
    due_date: string | null;
    assigned_to: string | null;
    created_at: string;
    updated_at: string;
}

export interface Sale {
    id: string;
    user_id: string;
    product_id: string;
    customer_id: string | null;
    quantity: number;
    unit_price: number;
    total_price: number;
    sale_date: string;
    created_at: string | null;
}

export interface AIRecommendation {
    id: string;
    user_id: string;
    title: string;
    description: string;
    type: string;
    priority: string;
    is_read: boolean | null;
    data: Json | null;
    created_at: string;
}

// Generate unique IDs
export const generateId = (): string => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};

// Mock products data
export const mockProducts: Product[] = [
    {
        id: generateId(),
        name: "Cloud Serveur Entreprise",
        description: "Serveur cloud haute performance pour entreprises avec 99.99% de disponibilité",
        price: 299.99,
        category: "Infrastructure",
        image_url: "/placeholder.svg",
        stock: 100,
        approved: true,
        seller_id: null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    },
    {
        id: generateId(),
        name: "Stockage Cloud Sécurisé",
        description: "Solution de stockage cloud avec chiffrement de bout en bout",
        price: 49.99,
        category: "Stockage",
        image_url: "/placeholder.svg",
        stock: 500,
        approved: true,
        seller_id: null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    },
    {
        id: generateId(),
        name: "Suite Collaboration Pro",
        description: "Outils de collaboration en temps réel pour équipes distribuées",
        price: 19.99,
        category: "Collaboration",
        image_url: "/placeholder.svg",
        stock: 1000,
        approved: true,
        seller_id: null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    },
    {
        id: generateId(),
        name: "Protection Cyber Avancée",
        description: "Protection cybersécurité multicouche avec IA intégrée",
        price: 149.99,
        category: "Sécurité",
        image_url: "/placeholder.svg",
        stock: 200,
        approved: true,
        seller_id: null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    },
    {
        id: generateId(),
        name: "API Gateway Cloud",
        description: "Passerelle API haute performance avec load balancing automatique",
        price: 99.99,
        category: "Infrastructure",
        image_url: "/placeholder.svg",
        stock: 300,
        approved: true,
        seller_id: null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    },
    {
        id: generateId(),
        name: "Analytics Suite Business",
        description: "Plateforme d'analyse de données avec tableaux de bord personnalisables",
        price: 79.99,
        category: "Analytics",
        image_url: "/placeholder.svg",
        stock: 250,
        approved: true,
        seller_id: null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    }
];

// Mock customers data
export const mockCustomers: Customer[] = [
    {
        id: generateId(),
        user_id: "demo-user",
        name: "Tech Solutions SA",
        email: "contact@techsolutions.fr",
        phone: "+33 1 23 45 67 89",
        company: "Tech Solutions",
        status: "active",
        value: 25000,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    },
    {
        id: generateId(),
        user_id: "demo-user",
        name: "Innovation Labs",
        email: "hello@innovationlabs.fr",
        phone: "+33 1 98 76 54 32",
        company: "Innovation Labs",
        status: "active",
        value: 45000,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    },
    {
        id: generateId(),
        user_id: "demo-user",
        name: "Digital Factory",
        email: "info@digitalfactory.com",
        phone: "+33 1 11 22 33 44",
        company: "Digital Factory",
        status: "prospect",
        value: 15000,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    },
    {
        id: generateId(),
        user_id: "demo-user",
        name: "Cloud Masters",
        email: "contact@cloudmasters.io",
        phone: "+33 1 55 66 77 88",
        company: "Cloud Masters",
        status: "active",
        value: 75000,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    }
];

// Mock deals data
export const mockDeals: Deal[] = [
    {
        id: generateId(),
        user_id: "demo-user",
        title: "Migration Cloud Enterprise",
        value: 50000,
        stage: "negotiation",
        probability: 75,
        close_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
        contact: "Jean Dupont",
        company_id: null,
        product_id: null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    },
    {
        id: generateId(),
        user_id: "demo-user",
        title: "Contrat Cybersécurité Annuel",
        value: 25000,
        stage: "qualification",
        probability: 50,
        close_date: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000).toISOString(),
        contact: "Marie Martin",
        company_id: null,
        product_id: null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    },
    {
        id: generateId(),
        user_id: "demo-user",
        title: "Suite Collaboration PME",
        value: 12000,
        stage: "proposal",
        probability: 80,
        close_date: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toISOString(),
        contact: "Pierre Durand",
        company_id: null,
        product_id: null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    },
    {
        id: generateId(),
        user_id: "demo-user",
        title: "Infrastructure Cloud Start-up",
        value: 8000,
        stage: "lead",
        probability: 25,
        close_date: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000).toISOString(),
        contact: "Sophie Bernard",
        company_id: null,
        product_id: null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    }
];

// Mock tasks data
export const mockTasks: Task[] = [
    {
        id: generateId(),
        user_id: "demo-user",
        title: "Appel client Tech Solutions",
        description: "Discuter du renouvellement de contrat",
        status: "pending",
        priority: "high",
        due_date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(),
        assigned_to: null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    },
    {
        id: generateId(),
        user_id: "demo-user",
        title: "Préparer présentation Cloud",
        description: "Créer slides pour nouveau prospect",
        status: "in_progress",
        priority: "medium",
        due_date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
        assigned_to: null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    },
    {
        id: generateId(),
        user_id: "demo-user",
        title: "Revue trimestrielle Analytics",
        description: "Analyser les métriques du Q4",
        status: "completed",
        priority: "low",
        due_date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
        assigned_to: null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    }
];

// Mock sales data generator
export const generateMockSales = (): Sale[] => {
    const sales: Sale[] = [];
    const now = new Date();

    for (let i = 0; i < 30; i++) {
        const saleDate = new Date(now);
        saleDate.setDate(saleDate.getDate() - i);

        const product = mockProducts[Math.floor(Math.random() * mockProducts.length)];
        const quantity = Math.floor(Math.random() * 10) + 1;

        sales.push({
            id: generateId(),
            user_id: "demo-user",
            product_id: product.id,
            customer_id: mockCustomers[Math.floor(Math.random() * mockCustomers.length)].id,
            quantity,
            unit_price: product.price,
            total_price: product.price * quantity,
            sale_date: saleDate.toISOString(),
            created_at: saleDate.toISOString()
        });
    }

    return sales;
};

// Mock AI recommendations
export const mockRecommendations: AIRecommendation[] = [
    {
        id: generateId(),
        user_id: "demo-user",
        title: "Opportunité de vente identifiée",
        description: "Tech Solutions SA a un pattern d'achat qui suggère un intérêt pour la Suite Collaboration Pro",
        type: "sales",
        priority: "high",
        is_read: false,
        data: null,
        created_at: new Date().toISOString()
    },
    {
        id: generateId(),
        user_id: "demo-user",
        title: "Client à risque détecté",
        description: "Digital Factory n'a pas été contacté depuis 45 jours. Recommandation: appel de suivi",
        type: "retention",
        priority: "medium",
        is_read: false,
        data: null,
        created_at: new Date().toISOString()
    },
    {
        id: generateId(),
        user_id: "demo-user",
        title: "Optimisation pricing suggérée",
        description: "Analyse de marché: augmentation possible de 10% sur Protection Cyber Avancée",
        type: "pricing",
        priority: "low",
        is_read: true,
        data: null,
        created_at: new Date().toISOString()
    }
];

// Demo user for local mode
export const demoUser: MockUser = {
    id: "demo-user-" + generateId(),
    email: "demo@cloudindustrie.fr",
    user_metadata: {
        full_name: "Utilisateur Demo"
    },
    created_at: new Date().toISOString()
};

export const demoProfile: UserProfile = {
    id: generateId(),
    user_id: demoUser.id,
    full_name: "Utilisateur Demo",
    email: "demo@cloudindustrie.fr",
    avatar_url: null,
    company: "Cloud Industrie",
    phone: "+33 1 00 00 00 00",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
};

export const demoDashboard: UserDashboard = {
    id: generateId(),
    user_id: demoUser.id,
    layout: { type: "default" },
    widgets: ["stats", "deals", "tasks", "chart"],
    theme: { mode: "dark" },
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
};

export const demoStats: UserStats = {
    id: generateId(),
    user_id: demoUser.id,
    total_incidents: 12,
    ai_queries: 156,
    workflows_count: 8,
    digital_twins_count: 3,
    last_active: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
};
