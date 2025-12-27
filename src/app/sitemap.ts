import { MetadataRoute } from 'next'
import { SITE_CONFIG } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: SITE_CONFIG.url,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${SITE_CONFIG.url}/resume.pdf`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
    ]
}
