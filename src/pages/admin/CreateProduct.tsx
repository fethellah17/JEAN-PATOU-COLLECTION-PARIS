import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { ArrowLeft, Plus, X, Upload } from "lucide-react";

const CreateProduct = () => {
  const [notes, setNotes] = useState({
    top: [] as string[],
    heart: [] as string[],
    base: [] as string[],
  });

  const [currentNote, setCurrentNote] = useState({
    top: "",
    heart: "",
    base: "",
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const addNote = (type: "top" | "heart" | "base") => {
    if (currentNote[type].trim()) {
      setNotes({
        ...notes,
        [type]: [...notes[type], currentNote[type].trim()],
      });
      setCurrentNote({ ...currentNote, [type]: "" });
    }
  };

  const removeNote = (type: "top" | "heart" | "base", index: number) => {
    setNotes({
      ...notes,
      [type]: notes[type].filter((_, i) => i !== index),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Product creation submitted");
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <a
            href="/admin/dashboard"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour au tableau de bord
          </a>
          <h1 className="text-4xl font-bold mb-2">Créer un nouveau produit</h1>
          <p className="text-muted-foreground">
            Ajoutez un nouveau parfum à votre collection
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              {/* Basic Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Informations de base</CardTitle>
                  <CardDescription>
                    Entrez les détails principaux du produit
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom du produit</Label>
                      <Input id="name" placeholder="L'Homme Noir" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="inspiration">Inspiration</Label>
                      <Input id="inspiration" placeholder="Inspiré de Sauvage" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Entrez la description du produit..."
                      rows={4}
                      required
                    />
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="category">Catégorie</Label>
                      <Select required>
                        <SelectTrigger id="category">
                          <SelectValue placeholder="Sélectionnez une catégorie" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="homme">Homme</SelectItem>
                          <SelectItem value="femme">Femme</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="badge">Badge (Optionnel)</Label>
                      <Select>
                        <SelectTrigger id="badge">
                          <SelectValue placeholder="Sélectionnez un badge" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">Aucun</SelectItem>
                          <SelectItem value="bestseller">Bestseller</SelectItem>
                          <SelectItem value="nouveau">Nouveau</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Pricing */}
              <Card>
                <CardHeader>
                  <CardTitle>Tarification</CardTitle>
                  <CardDescription>
                    Définissez les prix pour différents types de clients (en DA)
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="priceRetail">Prix de détail</Label>
                      <Input
                        id="priceRetail"
                        type="number"
                        placeholder="4500"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="priceWholesale">Prix de gros</Label>
                      <Input
                        id="priceWholesale"
                        type="number"
                        placeholder="3200"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="priceSuperWholesale">
                        Prix super grossiste
                      </Label>
                      <Input
                        id="priceSuperWholesale"
                        type="number"
                        placeholder="2800"
                        required
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Fragrance Notes */}
              <Card>
                <CardHeader>
                  <CardTitle>Notes olfactives</CardTitle>
                  <CardDescription>
                    Définissez la composition du parfum
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Top Notes */}
                  <div className="space-y-2">
                    <Label htmlFor="topNotes">Notes de tête</Label>
                    <div className="flex gap-2">
                      <Input
                        id="topNotes"
                        placeholder="e.g., Bergamote"
                        value={currentNote.top}
                        onChange={(e) =>
                          setCurrentNote({ ...currentNote, top: e.target.value })
                        }
                        onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addNote("top"))}
                      />
                      <Button
                        type="button"
                        size="icon"
                        onClick={() => addNote("top")}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {notes.top.map((note, index) => (
                        <Badge key={index} variant="secondary">
                          {note}
                          <button
                            type="button"
                            onClick={() => removeNote("top", index)}
                            className="ml-2"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Heart Notes */}
                  <div className="space-y-2">
                    <Label htmlFor="heartNotes">Notes de cœur</Label>
                    <div className="flex gap-2">
                      <Input
                        id="heartNotes"
                        placeholder="e.g., Lavande"
                        value={currentNote.heart}
                        onChange={(e) =>
                          setCurrentNote({ ...currentNote, heart: e.target.value })
                        }
                        onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addNote("heart"))}
                      />
                      <Button
                        type="button"
                        size="icon"
                        onClick={() => addNote("heart")}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {notes.heart.map((note, index) => (
                        <Badge key={index} variant="secondary">
                          {note}
                          <button
                            type="button"
                            onClick={() => removeNote("heart", index)}
                            className="ml-2"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Base Notes */}
                  <div className="space-y-2">
                    <Label htmlFor="baseNotes">Notes de fond</Label>
                    <div className="flex gap-2">
                      <Input
                        id="baseNotes"
                        placeholder="e.g., Cèdre"
                        value={currentNote.base}
                        onChange={(e) =>
                          setCurrentNote({ ...currentNote, base: e.target.value })
                        }
                        onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addNote("base"))}
                      />
                      <Button
                        type="button"
                        size="icon"
                        onClick={() => addNote("base")}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {notes.base.map((note, index) => (
                        <Badge key={index} variant="secondary">
                          {note}
                          <button
                            type="button"
                            onClick={() => removeNote("base", index)}
                            className="ml-2"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Image du produit</CardTitle>
                  <CardDescription>Télécharger l'image du produit</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Image Preview */}
                    {imagePreview ? (
                      <div className="relative group">
                        <img
                          src={imagePreview}
                          alt="Aperçu"
                          className="w-full h-64 object-cover rounded-lg border-2 border-border shadow-sm"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                          <Button
                            type="button"
                            variant="destructive"
                            size="sm"
                            onClick={() => setImagePreview(null)}
                          >
                            <X className="h-4 w-4 mr-2" />
                            Supprimer
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <label
                        htmlFor="image"
                        className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-12 text-center cursor-pointer hover:border-gold hover:bg-gold/5 transition-all duration-300 block"
                      >
                        <Upload className="mx-auto h-16 w-16 text-muted-foreground/50 mb-4" />
                        <p className="text-base font-medium text-foreground mb-1">
                          Cliquez pour télécharger
                        </p>
                        <p className="text-sm text-muted-foreground">
                          ou glissez-déposez votre image ici
                        </p>
                        <p className="text-xs text-muted-foreground mt-3">
                          PNG, JPG, WEBP jusqu'à 2MB
                        </p>
                      </label>
                    )}
                    
                    <Input
                      id="image"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                    
                    {imagePreview && (
                      <label
                        htmlFor="image"
                        className="block w-full p-3 text-sm font-medium text-center border-2 border-dashed rounded-lg hover:border-gold hover:bg-gold/5 transition-colors cursor-pointer"
                      >
                        <Upload className="inline-block h-4 w-4 mr-2" />
                        Changer l'image
                      </label>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button type="submit" className="w-full">
                    Créer le produit
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full"
                    onClick={() => window.history.back()}
                  >
                    Annuler
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default CreateProduct;
