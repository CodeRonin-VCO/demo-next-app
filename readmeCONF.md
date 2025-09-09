# Création et configuration de base du fichier dans la console cmd

```
npm create next-app@latest
```

<br>

```
Need to install the following packages:
create-next-app@15.5.2
Ok to proceed? (y)


> npx
> create-next-app

√ What is your project named? ... demo-next-app
√ Would you like to use TypeScript? ... Yes
√ Which linter would you like to use? » ESLint
√ Would you like to use Tailwind CSS? ... Yes
√ Would you like your code inside a `src/` directory? ... Yes
√ Would you like to use App Router? (recommended) ... Yes
√ Would you like to use Turbopack? (recommended) ... Yes
√ Would you like to customize the import alias (`@/*` by default)? ... No
Creating a new Next.js app in C:\Users\STG1746\Desktop\MonDossier\14-nextJS\demo-next-app.
```

# Constitution des fichiers

## .next
le dossier .next est l'équivalent du .git visant à tracer l'activité. On n'écrit pas dedans mais en cas de doute, on peut le supprimer. Il se recréera automatiquement dès qu'on lance le run dev.

## page.tsx
On garde
```
import Image from "next/image";

export default function Home() {
    return (
        <>
            
        </>
    );
}
```

__Les fichiers "page" doivent contenir un composant exporté par défaut !__

# Création des nouvelles routes
Il suffit d'ajouter des fichiers pages, appelé "page.tsx". Il faut créer des dossiers pour éviter les conflits et obtenir les chemins.

→ structure de dossiers

## Exemple
### Routes
```
/             → Page d'accueil
/demo         → Page demo du routing
/demo/:id     → Page avec un segment dynamique
```
### Page/dossiers → la structure de fichier doit correspondre aux embranchements des routes
```
/src/app/
...page.tsx
  /demo
  ...page.tsx
    /[id]
    ...page.tsx
```

### Les pages "layout.tsx" peuvent être mis dans tous les dossiers ou fichiers qu'on veut. Cela permet de généraliser un composant sur plusieurs pages
voir le fichier layout.tsx de base
```
export default function CustomLayout({children}: <{ children: React.ReactNode; }>) {
  return (
    <MonComposantGeneral />
    {children}
  );
}
```