/**
 * Created by jolaadeadewale on 08/10/2017.
 */
import mongoose from 'mongoose';

const sponsoredSchema = mongoose.Schema({
    name:{type: String}, comments:{type: String},
    user:{type: String}, link:{type: String}
});

export default mongoose.model('Sponsored', sponsoredSchema);