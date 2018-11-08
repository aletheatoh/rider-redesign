export default class ReorderSplitInbox {
  constructor (movedSplitInboxId, pushedSplitInboxId) {
    // movedSplitInboxId is the ID of the split inbox that is reordered
    // pushedSplitInboxId is the ID of the split inbox that is pushed down as a
    // result
    this.movedSplitInboxId = movedSplitInboxId
    this.pushedSplitInboxId = pushedSplitInboxId
  }

  run (op, viewState, account) {
    if (this.movedSplitInboxId === this.pushedSplitInboxId) {
      return
    }
    let splitInboxes = account.settings.get('splitInboxes')
    let oldIndex = splitInboxes.findIndex((si) => si.id === this.movedSplitInboxId)
    let newIndex = splitInboxes.findIndex((si) => si.id === this.pushedSplitInboxId)

    if (oldIndex === -1 || newIndex === -1) {
      throw new Error('Cannot reorder split. Invalid IDs', {movedSplitInboxId: this.movedSplitInboxId, pushedSplitInboxId: this.pushedSplitInboxId})
    }

    let splitInboxesCopy = Object.clone(splitInboxes, true)
    let splitInbox = splitInboxesCopy[oldIndex]
    splitInboxesCopy.removeAt(oldIndex)
    splitInboxesCopy.insert(splitInbox, newIndex)
    account.settings.set('splitInboxes', splitInboxesCopy)
  }
}
