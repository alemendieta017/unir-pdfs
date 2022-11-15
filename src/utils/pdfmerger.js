import PDFMerger from 'pdf-merger-js/browser'

async function merge (files) {
    const merger = new PDFMerger()

    for(const file of files) {
        await merger.add(file)
      }
    
    await merger.save()
}

export default merge