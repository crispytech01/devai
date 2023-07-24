import {Schema, model, models} from 'mongoose'

const DigestSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    digest: {
        type: String,
        required: [true, 'Digest is required!']
    },
    tag: {
        type: String,
        required: [true, 'Tag is required!']
    }

});

const Digest = models.Digest || model('Digest', DigestSchema);
export default Digest;
