import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, ShoppingCart, Users, TrendingUp } from "lucide-react";

const Dashboard = () => {
  // Mock data - replace with real data from your backend
  const stats = [
    {
      title: "Total Produits",
      value: "148",
      description: "+12 depuis le mois dernier",
      icon: Package,
      trend: "+8%",
    },
    {
      title: "Total Commandes",
      value: "573",
      description: "+23 depuis hier",
      icon: ShoppingCart,
      trend: "+12%",
    },
    {
      title: "Total Clients",
      value: "2,450",
      description: "+180 depuis le mois dernier",
      icon: Users,
      trend: "+19%",
    },
    {
      title: "Revenu",
      value: "45,231 DA",
      description: "+20% depuis le mois dernier",
      icon: TrendingUp,
      trend: "+20%",
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Tableau de bord Admin</h1>
          <p className="text-muted-foreground">
            Bienvenue dans votre panneau d'administration. Gérez vos produits, commandes et plus encore.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  {stat.description}
                </p>
                <div className="mt-2 text-xs font-medium text-green-600">
                  {stat.trend}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Commandes récentes</CardTitle>
              <CardDescription>
                Vous avez 23 nouvelles commandes cette semaine
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Commande #{1000 + i}</p>
                      <p className="text-xs text-muted-foreground">
                        2 articles · {(Math.random() * 200 + 50).toFixed(2)} DA
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">
                        Il y a {i} heures
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Actions rapides</CardTitle>
              <CardDescription>
                Gérez votre boutique efficacement
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <a
                href="/admin/create-product"
                className="block w-full p-3 text-sm font-medium text-center bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                Créer un nouveau produit
              </a>
              <a
                href="/admin/orders"
                className="block w-full p-3 text-sm font-medium text-center border rounded-md hover:bg-accent transition-colors"
              >
                Voir toutes les commandes
              </a>
              <a
                href="/admin/categories"
                className="block w-full p-3 text-sm font-medium text-center border rounded-md hover:bg-accent transition-colors"
              >
                Gérer les catégories
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;

