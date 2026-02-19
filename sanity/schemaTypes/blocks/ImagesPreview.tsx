import type {BlockProps} from 'sanity'
import {useClient} from 'sanity'
import {useCallback, useMemo} from 'react'

export function ImagesPreview(props: BlockProps) {
  const client = useClient({apiVersion: '2024-01-01'})
  const {projectId, dataset} = client.config()
  const images = (props.value as Record<string, unknown>)?.images as
    | Array<{asset?: {_ref?: string}}>
    | undefined

  const urls = useMemo(() => {
    if (!images || !projectId || !dataset) return []
    return images
      .map((img) => {
        const ref = img?.asset?._ref
        if (!ref) return null
        const [, id, dimensions, format] = ref.split('-')
        return `https://cdn.sanity.io/images/${projectId}/${dataset}/${id}-${dimensions}.${format}?w=600&auto=format`
      })
      .filter(Boolean) as string[]
  }, [images, projectId, dataset])

  const renderPreview = useCallback(
    () =>
      urls.length > 0 ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 8,
            padding: 8,
          }}
        >
          {urls.map((url) => (
            <img
              key={url}
              src={url}
              style={{
                display: 'block',
                maxWidth: urls.length > 1 ? '50%' : '100%',
                height: 'auto',
                borderRadius: 4,
              }}
            />
          ))}
        </div>
      ) : null,
    [urls],
  )

  if (urls.length === 0) {
    return props.renderDefault(props)
  }

  return props.renderDefault({
    ...props,
    renderPreview,
  })
}
