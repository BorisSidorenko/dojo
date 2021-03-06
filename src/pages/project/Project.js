import { useParams } from 'react-router';
import { useDocument } from '../../hooks/useDocuments';
import ProjectSummary from './ProjectSummary';
import ProjectComments from './ProjectComments';
import './Project.css';

export default function Project() {
    const { id } = useParams();
    const { document, error } = useDocument('projects', id);

    if (error) {
        return <div className="error">{error}</div>
    }
    if (!document) {
        return <div className="loading">Loading...</div>
    }

    return (
        <div className="project-details">
            <ProjectSummary project={document} />
            <ProjectComments project={document} />
        </div>
    )
}
