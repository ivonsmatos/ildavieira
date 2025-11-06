# 📸 Instruções para Upload das Imagens no Cloudinary

## Configuração Inicial

Acesse sua conta Cloudinary com as credenciais:

- **Cloud Name**: ildavieira
- **API Key**: 361293592591255
- **API Secret**: Z972wKlL3_kgJ66Uf-Srz-rMC0o

## Upload das Imagens

### 1. Organize suas imagens locais

Renomeie as imagens da pasta `imagens/` seguindo este padrão:

```
// Imagens atuais → Novos nomes no Cloudinary
corredor erro.webp → ildavieira/corredor-estudantes
IMG_5465.jpg → ildavieira/escola-fachada-principal
IMG_5482.jpg → ildavieira/patio-recreio-escola
IMG_5487.jpg → ildavieira/quadra-esportiva-coberta
Labfarm.webp → ildavieira/laboratorio-farmacia
patio erro 2.png → ildavieira/patio-recreio-escola
quadra erro 2.png → ildavieira/quadra-esportiva-coberta
refeitorio erro.webp → ildavieira/refeitorio-estudantes
sala laboratorio erro.png → ildavieira/laboratorio-ciencias
WhatsApp Image 2025-10-28 at 8.36.17 AM.jpeg → ildavieira/sala-leitura-biblioteca
// etc...
```

### 2. Upload via Interface Web

1. Acesse: https://cloudinary.com/console
2. Faça login com suas credenciais
3. Vá em "Media Library"
4. Clique em "Upload"
5. Selecione suas imagens
6. **IMPORTANTE**: Use os nomes sugeridos acima como "Public ID"

### 3. Estrutura de Pastas no Cloudinary

Organize as imagens na pasta `ildavieira/`:

```
ildavieira/
├── escola-fachada-principal
├── corredor-estudantes
├── patio-recreio-escola
├── quadra-esportiva-coberta
├── refeitorio-estudantes
├── laboratorio-ciencias
├── laboratorio-farmacia
├── sala-leitura-biblioteca
├── sala-recursos-pcd
├── diretoria-administrativa
├── logo-escola-oficial
└── brasao-sao-paulo
```

### 4. Configurações de Upload Recomendadas

- **Quality**: Auto
- **Format**: Auto (Cloudinary escolherá WebP/AVIF automaticamente)
- **Folder**: ildavieira
- **Auto-optimize**: habilitado
- **Auto-tagging**: habilitado

## Como as Imagens são Usadas no Site

As imagens são automaticamente otimizadas pelo código:

```typescript
// Exemplo de uso
import { getCloudinaryUrl, SCHOOL_IMAGES } from "../utils/cloudinary";

// Gera URL otimizada automaticamente
const imageUrl = getCloudinaryUrl(SCHOOL_IMAGES.hero, {
  width: 1920,
  height: 1080,
  quality: "auto",
  format: "auto",
});
```

## Benefícios da Implementação

✅ **Performance**: Imagens são servidas em formatos modernos (WebP, AVIF)  
✅ **Responsividade**: Diferentes tamanhos para mobile, tablet, desktop  
✅ **Otimização**: Compressão automática sem perda de qualidade  
✅ **CDN Global**: Carregamento rápido em qualquer lugar do mundo  
✅ **Lazy Loading**: Imagens carregam apenas quando necessário

## URLs de Exemplo

Após o upload, as URLs ficam assim:

```
https://res.cloudinary.com/ildavieira/image/upload/c_fill,q_auto,f_auto,w_800/ildavieira/escola-fachada-principal
```

O sistema já está configurado e funcionando - basta fazer o upload das imagens! 🚀
